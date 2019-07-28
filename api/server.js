const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');
const parentsRouter = require('../parents/parent-router.js');
const providerRouter = require('../providers/provider-router.js');
const staffRouter = require('../providers/staff-router.js');
const express = require('express')
const helmet = require('helmet');
const cors = require('cors')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/parents', parentsRouter);
server.use('/api/providers', providerRouter);
server.use('/api/staff', staffRouter);
server.get('/', (req, res) => {
  res.send("Immunization Tracker API");
});

module.exports = server;