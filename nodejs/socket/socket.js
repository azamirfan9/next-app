// socket.js
const { Server } = require('socket.io');

function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*", // Adjust this to your specific client origin in a production environment
      methods: ["GET", "POST"]
    }
  });
  console.log('A user connected:');
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    socket.on('chat message', (msg) => {
      console.log('message:', msg);
      io.emit('chat message', msg); // Broadcast the message to all connected clients
    });
  });

  // You can also export the 'io' object if you need to access it in other files
  // module.exports = io; 
}

module.exports = initializeSocket;