var http = require('http');

http.get(process.argv[2], function(response){

	response = response.setEncoding("utf8");

	
	response.on("data", function(data){
		var word = "" 
		for (var i = 0; i < data.length; i++) {
			word += data[i]
		};
		console.log(word)
	})

	response.on("error", function(err){
		console.log(err)
	})


})
