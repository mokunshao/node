const fs = require('fs');

fs.access('./app0.js', function (err) {
    if (err) {
        throw err;
    }
    console.log('success');
});
