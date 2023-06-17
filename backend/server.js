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

Array(10).fill("").map((_, index) => users.push({name: `User ${index}`}))

let currentPhase = {};
io.on('connection', (socket) => {
    socket.on('user_register', (data) => {
        if (!users.includes(data.message)) {
            users.push({name: data.message})
        }
        io.sockets.emit('user_in_room', users)
    })
    socket.emit('user_in_room', users)
    socket.on("game_phase", phase => {
        currentPhase = phase;
        io.sockets.emit("update_game_phase", phase)
    })
    socket.on('update_role', updateUsers => {
        users = updateUsers;
        io.sockets.emit("user_in_room", users);
    })
    socket.emit('update_game_phase', currentPhase)
});

app.use(cors());

app.get('/', (req, res) => {
    res.json({users})
});

server.listen(80, () => {
    console.log('listening on *:80');
});