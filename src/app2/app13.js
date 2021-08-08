const fs = require('fs');

const readStream = fs.createReadStream('./app12.js', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./myTest.js', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    writeStream.write(chunk, () => {
        console.log(chunk);
    });
});
