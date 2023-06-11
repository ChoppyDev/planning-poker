const socket = require("socket.io")
const express = require('express');
const app = express();
const port = 8080

const http = require("http")
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
