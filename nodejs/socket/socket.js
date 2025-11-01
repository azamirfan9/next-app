// socket.js
const { Server } = require('socket.io');
const helper = require('../helper/helper');
const register = require('../controller/Register');

function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*", // Adjust this to your specific client origin in a production environment 89efb192a6a07cf9e9c71134d94f6dbd
      methods: ["GET", "POST"]
    }
  });
  console.log('A user connected:');
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    //console.log(helper.generateFixedLengthNumberInString(16));
    //console.log(helper.decrypt('89efb192a6a07cf9e9c71134d94f6dbd').encryptedData);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    socket.on('chat message', (msg) => {
      console.log('message:', msg);
      io.emit('chat message', 'Thank You'); // Broadcast the message to all connected clients
    });

    socket.on('account_verify', (msg) => {
      console.log('message:', msg.params);
      const data = register.accountVerify(msg.params);
      console.log(data);
      //io.emit('account_verify', 'Thank You'); // Broadcast the message to all connected clients
    });
  });

  // You can also export the 'io' object if you need to access it in other files
  // module.exports = io; 
}

module.exports = initializeSocket;