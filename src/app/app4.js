const http = require('http');

let responseData = '';

http.request(
    {
        host: 'localhost',
        port: 9000,
        method: 'get',
        path: '/login?username=abc&password=123',
    },
    function (response) {
        response.on('data', function (chunk) {
            responseData += chunk;
        });
        response.on('end', function () {
            console.log(responseData);
        });
    }
).end();
