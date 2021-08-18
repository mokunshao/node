const net = require('net');

const server = new net.Server();

server.on('connection', () => {
    console.log('client connected');
});

server.on('listening', () => {
    console.log('server is listening');
    server.close();
});

server.on('close', () => {
    console.log('server closed');
});

server.on('error', () => {
    console.log('server error');
});

server.listen(8888);
