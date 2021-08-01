const fs = require('fs');

fs.realpath('./app0.js', function (err, resolvedPath) {
    if (err) {
        throw err;
    }
    console.log(resolvedPath);
});
