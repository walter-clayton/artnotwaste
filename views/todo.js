var express = require('express');

var router = express.Router();

var todoItems = [
		{ id: 1, desc: 'foo'},
		{ id: 2, desc: 'bar'},
		{ id: 3, desc: 'baz'}
		]

router.get('/', function (req, res) {
	res.render('index', {
		title: 'Make Art Not Waste',
		items: todoItems

	});
});

router.post('/add', function (req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1, 
		desc: newItem
	});

	res.redirect('/');
});



router.get('/id/:name', function(req, res){
	console.log(req.params);
	name = req.params.name;
	randomNumber = Math.floor(Math.random() * 100) + 1;
	res.send("Hello " + name.toUpperCase() + " this is your id: " + randomNumber);
	console.log(randomNumber);
});


router.get('/comments/:comments/:title/:id/', function(req, res){
	res.send("welcome to the comments page!");
	console.log(req.params);
});


router.get('*', function(req, res) {
	res.send("ERROR PAGE!!!");
});




module.exports = router;