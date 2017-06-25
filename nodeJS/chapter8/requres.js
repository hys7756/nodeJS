var express = require('express');

var app = express();
app.use(function(req, res) {
	var userAgent = req.header('User-Agent');
	console.log('[req.headers]', req.headers);
	console.log('[userAgent]', userAgent);

	//res.sendStatus(202);
	//
	var name = req.query.name;
	var region = req.query.region;

	var response = "<h1> My name is " + name + "!</h1>";
	response += "<h1> I live in " + region + ":) Nice to meet you!</h1";

	res.send(response);
}).listen(12345, function() {
	console.log('create server');
}); 
