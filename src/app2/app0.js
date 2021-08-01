const fs = require('fs');

fs.readFile('./test.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

try {
    const data = fs.readFileSync('./test.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

fs.writeFile('./myTest.txt', 'hello, my test', function (err) {
    if (err) {
        console.log(err);
    }
});
