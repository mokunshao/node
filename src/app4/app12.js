const dgram = require('dgram');

const message = Buffer.from('This message comes from client');

const socket = dgram.createSocket('udp4');

socket.send(message, 0, message.length, 9999, 'localhost', (err, bytes) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Client has sent ' + bytes + ' bytes message');
});

socket.on('message', (msg, info) => {
    const message2 = 'hello world';
    socket.send(message2, 0, message2.length, 9999, 'localhost');
});
