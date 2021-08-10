const buffer = Buffer.alloc(128);

const length = buffer.write('hello你好', 'utf8');

console.log('byte count: ' + length);
