var http = require('http');

http.get(process.argv[2], function(response){

	response = response.setEncoding("utf8");

	var word = ""
	response.on("data", function(data){
		word += data
	})

	response.on("error", function(err){
		console.log(err)
	})

	response.on("end", function(){
		console.log(word.length);
		console.log(word);

	})


})
