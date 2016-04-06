var http = require('http');
var count = 0;
var responses = []

for (var i = 0; i < process.argv.length-2; i++) {
	(function(i){

		var currentUrl = process.argv[i+2];
		http.get(currentUrl, function(response){
			var word = ""

			response = response.setEncoding("utf8");

			
			response.on("data", function(data){
				word += data
			})

			response.on("error", function(err){
				console.log(err)
			})

			response.on("end", function(){
				responses[i] = word;
				count++
				if(count === 3)
				for (var j = 0; j < responses.length; j++) {
					console.log(responses[j])
				};

			})		
		})	
	})(i)
};

