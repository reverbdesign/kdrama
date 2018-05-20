const app = require('express')();
const http = require('http').Server(app);
const path = require('path');

//socket stuff
const io = require('socket.io')(http);
//setup routes
const api = require('./routes/api.js')(io);

app.get('/', (req, res) => {res.sendFile(`${__dirname}/pages/index.html`)});
http.listen(80, () => console.log("Listening on port 80"));
