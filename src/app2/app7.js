const fs = require('fs');

fs.mkdir('1/2/3', { recursive: true }, function (err) {
    if (err) {
        throw err;
    }
    console.log('success');
});
