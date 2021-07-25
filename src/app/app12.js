const util = require('util');

const obj = {
    name: 'mike',
    age: 18,
    married: false,
};

console.log(util.inspect(obj, { colors: true }));
