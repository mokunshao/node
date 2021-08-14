const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const buffer3 = Buffer.from('你好');

const bufferArray = [buffer1, buffer2, buffer3];

const bufferResult = Buffer.concat(bufferArray);

console.log(bufferResult.length);

console.log(bufferResult.toString('utf8'));
