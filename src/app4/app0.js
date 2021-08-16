const net = require('net');

const server = net.createServer((socket) => {
    console.log('server connected');
    console.log(socket);
});

server.listen(8888, () => {
    console.log('server is listening');
});
