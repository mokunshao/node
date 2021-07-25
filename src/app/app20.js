const http = require('http');
const querystring = require('querystring');
const url = require('url');
const userService = require('./UserService');

const server = http.createServer(function (request, response) {
    let data = '';
    request.on('data', function (chunk) {
        data += chunk;
    });
    request.on('end', function () {
        const requestUrl = 'http://' + request.headers.host + request.url;
        const requestMethod = request.method;
        if (requestUrl.includes('login') && requestMethod === 'GET') {
            const requestParams = new URL(requestUrl).searchParams;
            console.log('requestParams:', requestParams);

            const username = requestParams.get('username');
            const password = requestParams.get('password');

            const loginResult = userService.login(username, password);
            console.log('loginResult:', loginResult);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('username:' + username + ',password:' + password);
        }
    });
});

server.listen(9000, function () {
    console.log('server is listening on port 9000');
});

// http://localhost:9000/login?username=abc&password=123
