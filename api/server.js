const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');
const parentsRouter = require('../parents/parent-router.js');
const providerRouter = require('../providers/provider-router.js');
const staffRouter = require('../providers/staff-router.js');
const childRouter = require('../child/child-router.js');
const immunizationRouter = require('../immunizations/immunization-router.js');
const restricted = require('../auth/restricted-middleware.js');
const express = require('express')
const helmet = require('helmet');
const cors = require('cors')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/parents', restricted, parentsRouter);
server.use('/api/providers', restricted, providerRouter);
server.use('/api/children', restricted, childRouter);
server.use('/api/staff', restricted, staffRouter);
server.use('/api/immunizations', restricted, immunizationRouter)
server.get('/', (req, res) => {
  res.send("Immunization Tracker API");
});

module.exports = server;