const fs = require('fs');

fs.appendFile('testAppend.txt', 'hello ', 'utf8', function (err) {
    if (err) {
        throw err;
    }
    console.log('success');
});
