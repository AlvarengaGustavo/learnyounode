const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let subs = buffer.toString();
let array = subs.split('\n');

console.log(array.length -1);