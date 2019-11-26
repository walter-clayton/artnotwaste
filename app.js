var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



//configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// use middleware

app.use(bodyParser());
app.use(express.static("public"));



// define routes
app.use(require('./views/todo'));


// start the server

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("ready on port 3000 " + port);
});


