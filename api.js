

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysqldatabase',
  database : 'utours'
});
 
connection.connect();
 
 /*
var express = require('express');

var app = express();

app.get('/api',function(req,res){
	//connection.query('SELECT * From universities', function(err, rows, fields) {
	//if (err) throw err;
	//return 0;
	//console.log('The solution is: ', rows[0]);
});
	

app.get('/api/universities',function(req,res){
	connection.query('SELECT * From universities', function(err, rows, fields) {
	if (err) throw err;
	//return rows;
	console.log('The solution is: ', rows[0]);
});


app.listen(3000);
	*/

var express = require('express');

var app = express();

app.get('/api',function(req,res){
	connection.query('SELECT * From universities', function(err, rows, fields) {
	if (err) throw err;
	res.send(rows);
	});
	
	
	
});

app.get('/api/universities',function(req,res){
	connection.query('SELECT * From universities', function(err, rows, fields) {
	if (err) throw err;
	res.send(rows);
	});
	
	
});

app.listen(3000);

 
 
 

