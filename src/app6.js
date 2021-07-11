const http = require('http');

let responseData = '';

const options = {
    host: 'localhost',
    port: 9000,
};

const request = http.request(options);

request
    .on('response', function (response) {
        response.on('data', function (chunk) {
            responseData += chunk;
        });
        response.on('end', function () {
            console.log(responseData);
        });
    })
    .end();
