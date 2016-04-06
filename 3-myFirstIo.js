
var fs = require('fs');

var bufferObject = fs.readFileSync(process.argv[2])

console.log(bufferObject.toString().split('\n').length - 1)