var express = require('express');

var app = express();

app.use(function(req, res) {
	res.status(404).send("<h1>ERROR!!!</h1>");
	
	var output = [];
	for (var i = 0; i < 10; i++) {
		output.push({
			count : i,
			name : 'name - ' + i
		});
	}

	//res.json(output);
	//res.send({name:'SONG', age: 19});
}).listen(12345, function() {
	console.log('start server');
})
