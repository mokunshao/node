const fs = require('fs');

fs.writeFile('./testUnlink.txt', '', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('file created');
    }
    fs.unlink('./testUnlink.txt', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('file deleted');
        }
    });
});
