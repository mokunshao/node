const net = require('net');

const server = net.createServer((socket) => {
    console.log('server connected');
});

server.listen(8888);

server.on('listening', () => {
    console.log('server is listening');
});
