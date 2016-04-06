
var fs = require('fs');

fs.readFile(process.argv[2], function(err, bufferObject){
	console.log(bufferObject.toString().split('\n').length - 1)
})

