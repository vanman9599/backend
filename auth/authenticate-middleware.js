const bcrypt = require('bcryptjs'); /// <<<<<< install it and require it

const Users = require('../users/user-model.js');

module.exports = authenticate;

function authenticate(req, res, next) {
  const { username, password } = req.headers;

  
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        next(); 
      } else {
        res.status(401).json({ message: 'Password or Username is incorrect. Please register, or try again.' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}