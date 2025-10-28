const express = require('express');
const app = express();

const initializeSocket = require('./socket/socket');
const Mailer = require('./mailer/Mailer');
const m2 = new Mailer();
//m2.startMail();


const port = 5000;
const hostname = '192.168.148.242';

const cors = require('cors');
const http = require('http');
const path = require("path");
app.use(cors({
  origin: '*'
}));

app.get('/uploads/:filename', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/files/' + req.params.filename));
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(
  express.urlencoded({
    extended: false,
  })
);
//app.use(bodyParser(false));

const routes = require('./routes/routes');

// app.get('/', (req, res) => {
//     res.json({ message: "ok" });            
// })

app.use('/', routes);

const server = http.createServer(app);
initializeSocket(server);

server.listen(port, () => {
   console.log("listening on *:5000");
   
   });
