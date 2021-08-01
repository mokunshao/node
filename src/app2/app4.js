const fs = require('fs');

fs.writeFile('./testRename.txt', '', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('file created');
    }
    fs.rename('./testRename.txt', './testRename2.txt', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('file renamed');
            fs.stat('./testRename2.txt', function (err, stat) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(stat);
                }
            });
        }
    });
});
