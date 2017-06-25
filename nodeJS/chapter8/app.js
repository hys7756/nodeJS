var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false }));

app.get('/', function(req, res) {
	console.log("auth?", req.cookies.auth);
	
	if (req.cookies.auth) {
		res.send('<h1>Login Success</h1>');
	} else {
		res.redirect('/login');
	}
});

app.get('/login', function(req, res) {
	console.log('GET method');
	
	fs.readFile('login.html', function(error, data) {
		res.send(data.toString());
	});
});

app.put('/login', function(req, res) {
	console.log("put ");
});

app.post('/login', function(req, res) {
	console.log("post!!");

	var login = req.body.login;
	var password = req.body.pw;

	console.log("login : ", login, "/ pw : ", password);
	console.log(req.body);

	if (login == 'rint' && password == '1234') {
		console.log("login 성공");
		res.cookie('auth', true);
		res.redirect('/');
	} else {

		console.log("login 실패");
		res.redirect('/login');
	}
});


app.listen(12345, function() {
	console.log("접속 완료");
})
