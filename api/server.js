const express = require("express");

const AccountRouter = require('../account/account-router.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
  res.status(200).json({"api": "up and running"})
})

module.exports = server;
