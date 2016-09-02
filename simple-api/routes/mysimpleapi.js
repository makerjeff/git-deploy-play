var express = require('express');
var router = express.router();

//get route
router.get('/', function(req, res){
	res.send('You sent a wonderful request to mysimpleAPI!');
});

//post route
router.post('/', function(req, res){
	res.send('You sent this data: ' + req.param('data'));
});

module.exports = router;
