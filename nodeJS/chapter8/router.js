var express = require('express')


var app = express();

app.get('/a', function(req, res) {
	res.send('<a href = "/b">Go to page B</a>');
});

app.get('/b', function(req, res) {
	res.send('<a href="/a">Go to page A</a>');
});

app.get('/page/:id', function(req, res) {
	var id = req.params.id;
	res.send('<h1>page params : ' + id + '</h1>');
});

app.all('*', function(req, res) {
	res.send('<h1>Page not found :( </h1>');
});

app.listen(12345, function() {
	console.log("접속 완료");
})
