var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback){

	fs.readdir(dirName, function(err, list){
		var filteredList = [];

		// if there's an error, return 
		// the error in the callback, and call it.
		if(err){
			return callback(err)
		}

		// if no error, filter it and return the 
		// callback with this filtered data in it.
		for (var i = 0; i < list.length; i++) {
			if(path.extname(list[i]) === "." + ext){
				filteredList.push(list[i])
			}
		};
		
		return callback(null, filteredList)
	})

}

