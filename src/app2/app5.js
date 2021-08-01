const path = require('path');

const myPath = path.join('/hello', 'world', 'test/wellcome', 'haha');
console.log(myPath);

const myPath2 = path.join('/hello', 'world', 'test/wellcome', 'haha', '..');
console.log(myPath2);
