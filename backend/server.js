const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors")
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = new socketIO.Server(server, {
    cors: {
        credentials: false
    },
})

let users = [];

io.on('connection', (socket) => {
    socket.on('user_register', (data) => {
        if (!users.includes(data.message)) {
            users.push(data.message)
        }
        io.sockets.emit('user_in_room', users)
    })
    socket.emit('user_in_room', users)
});

app.use(cors());

app.get('/', (req, res) => {
    res.json(users)
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});