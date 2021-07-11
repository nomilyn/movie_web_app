const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express');
const cors = require('cors');
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(express.static('build'));
server.use(middleware);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running on port ', PORT)
});






