var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<img src="/1020.png"/>');
});

app.listen(12345, function() {
	console.log("접속 완료")
});
