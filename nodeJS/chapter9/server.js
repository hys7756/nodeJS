var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// db 커넥터 생성
var client = mysql.createConnection({
    user: 'root',
    password: 'passwd',
    database: 'Company'
});

// 서버 생성
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

// 서버 실행
app.listen(12345, function(req, res) {
    console.log("서버 실행");
});

/**
 * [error]
 * readFile 실행 시, 'utf8'을 선언하지 않았더니 this.templateText.replace is not a function 에러 발생
 * 인코딩 선언을 해주지 않으면 raw buffered 값이 반환되기 때문이다. 
 * @see https://stackoverflow.com/questions/45123428/rendering-ejs-template-throws-an-error-this-templatetext-replace-is-not-a-functi
 */
// 라우팅
app.get('/', function(req, res) {
    fs.readFile( __dirname + '/list.ejs', 'utf8', function(error, template) {
        if (error) {
            console.log("readFile error", error);
        }

        client.query('SELECT * FROM coffee', function(error, result, field) {
            res.send(ejs.render(template, {data: result}));
        });
    });
});

app.get('/delete/:id', function(req, res) {
    var deleteID = req.params.id;

    client.query('DELETE FROM coffee WHERE id = ?', [deleteID], function() {
        res.redirect('/');
    })
});

app.get('/insert', function(req, res) {
    fs.readFile(__dirname + '/insert.ejs', 'utf8', function(error, template) {
        res.send(template);
    })
});

app.post('/insert', function(req, res) {
    var body = req.body;

    client.query("INSERT INTO coffee (name, price) VALUES (?, ?)", 
                [body.name, body.price]
                , function() {
                    res.redirect('/');
                  }
    );
});

app.get('/edit/:id', function(req, res) {
    var paramID = req.params.id;

    fs.readFile(__dirname + '/edit.ejs', 'utf8', function(error, template) {
        console.log("file 읽음", template);
        client.query('SELECT * FROM coffee WHERE id = ?', [paramID], function(error, result) {
            console.log('[result]', result);
            res.send(ejs.render(template, {data: result[0]}));
        });
    })

});

app.post('/edit/:id', function(req, res) {
    var updateID = req.params.id;
    var updateData = req.body;

    client.query('UPDATE coffee SET name=?, price=? WHERE id = ?', 
            [updateData.name, updateData.price, updateID], 
            function(){
                res.redirect('/');
            })

});