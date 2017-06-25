var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// 미들웨어 생성
app.use(cookieParser());

app.get('/setCookie', function(req, res) {
	res.cookie('string', 'cookie');
	res.cookie('json', {
		name: 'cookie',
		property: 'delicious'
	});

	res.redirect('/getCookie');
});

app.get('/getCookie', function(req, res) {
	res.send(req.cookies);
});

app.listen(12345, function() {
	console.log('접속');
});
