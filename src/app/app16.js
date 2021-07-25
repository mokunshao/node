const dns = require('dns');

dns.resolve('www.bilibli.com', function (error, addresses) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(addresses);
});
