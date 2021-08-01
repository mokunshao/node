const fs = require('fs');

fs.mkdir('test', (err) => {
    if (err) {
        throw err;
    }
    setTimeout(() => {
        fs.rmdir('test', (err) => {
            if (err) {
                throw err;
            }
        });
    }, 1000);
});
