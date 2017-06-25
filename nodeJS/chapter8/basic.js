var express= require('express');

var app = express();

app.use(function(require, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello Express Module~</h1>');
}).listen(12345, function() {
	console.log('start server');
})
