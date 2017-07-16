var mysql = require('mysql')

var client = mysql.createConnection({
	user: 'root',
	password: 'thdthdthd135!'
});

client.query('USE Company');
client.query('SELECT * FROM coffee', function(error, results, fields) {
	if (error) {
		console.log("error 발생", error)
	}
	
	console.log("select 결과")
	console.log(results);
});

