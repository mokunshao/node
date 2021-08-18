const net = require('net');

const server = net.createServer(() => {
    console.log('client connected');
});

server.listen(8888, () => {
    const address = server.address();
    console.log(address.port, address.address, address.family);
});
