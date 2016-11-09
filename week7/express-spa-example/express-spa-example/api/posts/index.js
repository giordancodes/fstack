var express = require('express');
var router = new express.Router();

// Modify this file so that it pulls data from the controller rather
// than hardcoding the route here. You'll need to require the controller, and
// reference the various controller actions in this file.

router.get('/', (req, res) =>{
  res.send('Listing posts should go here');
});

router.get('/:id', (req, res) =>{
  res.send('Show post id ' + req.params.id + ' here.');
});

router.post('/', (req, res) =>{
	res.send("Creating a post");
});

module.exports = router;
