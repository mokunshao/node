const querystring = require('querystring');

const obj = {
    name: 'mike',
    age: 18,
};

console.log(querystring.stringify(obj));
