// socket.js
const { Server } = require('socket.io');
const helper = require('../helper/helper');
const register = require('../controller/Register');
const AccountVerify = require('../controller/class/AccountVerify');

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
    

    // socket.on('disconnect', () => {
    //   console.log('User disconnected:', socket.id);
    // });

    socket.on('chat message', (msg) => {
      console.log('message:', msg);
      io.emit('chat message', 'Thank You'); // Broadcast the message to all connected clients
    });

    //User joined room: 0038905207678887
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`User joined room: ${roomName}`);
    });

    socket.on('account_verify', ({ roomName, message }) => {
      const verify = new AccountVerify(message);
      verify.verifyUser().then(result => {
        console.log(`Message in room ${roomName}`);
        if(result != null){
          result.otp = '0';
          result.status = 1;
          result.save();
          io.in(roomName).emit('account_verify', {status: true, message: "Account was verified successfully",});
        }else{
          io.in(roomName).emit('account_verify', {status: false, message: "Account was not verified successfully",});
        }
      }).catch((error) => {
        io.in(roomName).emit('account_verify', {status: false, message: "Something went wrong!!!",});
      })
        //console.log(`Message in room ${roomName}: ${message}`);
        //io.in(roomName).emit('chatMessage', message); // Emit to all in the room
    });

    // socket.on('account_verify', (msg) => {
    //   console.log('message:', msg.params);
    //   const verify = new AccountVerify(msg.params.otp);
    //   verify.verifyUser().then(result => {
    //     if(result != null){
    //       result.otp = '0';
    //       result.status = 1;
    //       result.save();
    //       io.emit('account_verify', {status: true, message: "Account was verified successfully",});
    //     }else{
    //       io.emit('account_verify', {status: false, message: "Account was not verified successfully",});
    //     }
    //   }).catch((error) => {
    //     io.emit('account_verify', {status: false, message: "Something went wrong!!!",});
    //   })
    // });
  });

  // You can also export the 'io' object if you need to access it in other files
  // module.exports = io; 
}

module.exports = initializeSocket;