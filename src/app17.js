const dns = require('dns');

dns.reverse('114.114.114.114', function (error, addresses) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(addresses);
});
