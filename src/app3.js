const http = require('http');

const server = http.createServer((request, response) => {
    request.on('end', () => {
        const method = request.method;
        const headers = JSON.stringify(request.headers);
        const httpVersion = request.httpVersion;
        const url = request.url;
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        const responseData =
            method + ', ' + headers + ', ' + httpVersion + ', ' + url;
        response.end(responseData);
    });
});

const port = 9000;

server.listen(port, () => {
    console.log('server is listening on port ' + port);
});
