// require the module
var filter = require('./6-module.js')

// run the function, giving it the dirName, ext, and a callback
filter(process.argv[2], process.argv[3], function(err, data){

	// if error
	if(err){
		return console.error("There's an error: ", err)
	}

	// if no error, just print out the data, line by line. 
	for(var i = 0; i < data.length; i++) {
		console.log(data[i])
	};

})