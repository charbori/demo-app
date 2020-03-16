var express = require('express');
var app = express();
var port = 80;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res){
	res.send('hello world');
});
app.listen(port, ()=> console.log(`Example run ${port}!`))
