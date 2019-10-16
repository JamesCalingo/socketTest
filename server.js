const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http)
const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("someone's here!")
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on port:' + port);
});