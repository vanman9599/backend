const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');
const secrets = require('../config/secrets.js');


// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username: username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
          userId: user.id, 
          role: user.role,
        });
      } else {
        res.status(401).json({ message: 'Already logged in?' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    };

  const jwtOptions = {
    expiresIn: '1d',
  };
  return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
}

module.exports = router;        