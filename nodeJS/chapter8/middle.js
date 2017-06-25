var express= require('express');

var app = express();

app.use(function(req, res, next) {
	console.log('첫번째 미들웨어');
	next();
});

app.use(function(req, res, next) {
	console.log('두번째 미들웨어');
	next();
});

app.use(function(req, res, next) {
	console.log('세번째 미들웨어');
	next();
});

app.use(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h2> Express Basic</h2>');
}).listen(12345, function() {
	console.log('start server');
});
