var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static("public"));

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "capitals_db"
    });



    app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
    });

    app.get('/show-questions', function(req, res) {
        connection.query("SELECT questions.question, answers.answer FROM questions LEFT JOIN answers ON questions.id = answers.question_id", function(err, response) {
            res.render('show', {
                dsfdsfsdfsdfd: response
            });
        })
    });



    app.listen(3000, function() {
	console.log('Listening on port 3000');
    });







    // app.get('/front', function(req, res) {
    //     res.sendFile(path.join(__dirname, "public/front.html"));
    //     });

    // app.get('/back', function(req, res) {
    //     res.sendFile(path.join(__dirname, "public/back.html"));
    //     });