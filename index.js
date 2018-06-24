var express = require('express');
var socketio = require('socket.io');

//app setup
var app = express();
var server  = app.listen(4000, function(){
  console.log('listening to request on port 4000');
});

//Static file
app.use(express.static('public'));

// socket setup
var io = socketio(server);

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

});
