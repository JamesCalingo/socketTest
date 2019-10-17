const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http)
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log("Someone new is here!");

  socket.username = "Anonymous";

  socket.on("change username", function (data) {
    socket.username = data.username
  })

  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
  socket.on("disconnect", function () {
    console.log("Someone left the room!")
  })
});

http.listen(port, function () {
  console.log('listening on port:' + port);
});