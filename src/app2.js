const http = require('http');

const server = new http.Server();

server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Node.js');
});

const port = 9000;

server.listen(port);
