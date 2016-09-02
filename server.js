var fs = require('fs');

var hskey = fs.readFileSync('hacksparrow-key.pem');
var hscert = fs.readFileSync('hacksparrow-cert.pem');

var options = {
	key: hskey,
	cert: hscert
};

var https = require('https');

var express = require('express');
var colors = require('colors');
var app = express();


//get method
app.get('/', function(req, res){
	res.send(getRandomFortune());
	console.log('A get request was received. ' + Date().yellow);
});

//post method
app.post('/', function(req,res){
	res.send('You sent this data: ' + req.param('data') + '\n');
	console.log('a POST request was received with this data: ' + req.param('data'));
});

https.createServer(options, app).listen('3443', function(){
	console.log('Secure Express server listening on port 3443');
});

//custom functions
function getRandomFortune () {
	var fortunes = [
                'You will find love this evening.\n',
                'There is no spoon.\n',
                'Money is made in the fires of pain and suffering.\n',
                'Children are worth $25.08.\n',
                'This is a random fortune.\n',
                'Go eat a banana.',
                'This is the 7th and last message.\n',
		'Monkeys are great for building fortresses.\n',
		'Princess Leia is cooler than Princess Toadstool.\n'
        ];
	return fortunes[Math.floor(Math.random() * fortunes.length)];
}
