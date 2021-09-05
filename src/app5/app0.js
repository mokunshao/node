const http = require('http');
const io = require('socket.io');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        fs.readFile('./client.html', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.end(data.toString());
            }
        });
    } else {
        res.end('<html><body>Error</body></html>');
    }
});

server.listen(3000, 'localhost');

const ws = new io.Server(server);

ws.on('connection', (socket) => {
    console.log('connection has been established');
    socket.on('message', (message) => {
        console.log('message: ', message);
    });
    socket.on('disconnect', () => {
        console.log('connection has lost');
    });
    socket.send('hello client');

    socket.emit('serverEvent', 'this is serverEvent');

    socket.on('clientEvent', (data) => {
        console.log('clientEvent: ', data);
    });

    socket.on('broadcastEventClient', (message) => {
        console.log(message);
        socket.broadcast.emit('broadcastEventServer', 'you are good');
    });
});
