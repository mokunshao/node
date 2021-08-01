const fs = require('fs');

fs.open('test.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err);
    } else {
        console.log('file is opened');
    }
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('file is closed');
        }
    });
});
