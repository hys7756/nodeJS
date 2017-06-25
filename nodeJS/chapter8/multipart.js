var express = require('express');
var fs = require('fs');
var multiPart = require('connect-multiparty');

var app = express();

app.use(multiPart({uploadDir: __dirname + '/multipart'}));

app.get('/', function(req, res) {
	fs.readFile('HTMLPage.html', function(error, data) {
		res.send(data.toString());
	});
});

app.post('/', function(req, res) {
	console.log(req.body);
	console.log(req.files);

	res.redirect('/');
});

app.listen(12345, function() {
	console.log("접속");
});
