const net = require('net');

const server = net.createServer((socket) => {
    const localAddress = socket.localAddress;
    console.log('localAddress: ', localAddress);
    const localPort = socket.localPort;
    console.log('localPort: ', localPort);
    const remoteAddress = socket.remoteAddress;
    console.log('remoteAddress: ', remoteAddress);
    const remoteFamily = socket.remoteFamily;
    console.log('remoteFamily: ', remoteFamily);
    const remotePort = socket.remotePort;
    console.log('remotePort: ', remotePort);
});

server.listen(8888, () => {
    console.log('server is listening');
});
