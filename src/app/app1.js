const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Node.js');
});

const port = 9000;

server.listen(port);

server.on('listening', () => {
    console.log('server is listening on port ' + port);
});

server.on('close', () => {
    console.log('server is closed');
});
