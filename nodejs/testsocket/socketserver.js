const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server listening on port 3001');
});