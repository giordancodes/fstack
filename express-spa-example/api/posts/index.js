var express = require('express');
var router = new express.Router();
var controller = require('./controller');

// Modify this file so that it pulls data from the controller rather
// than hardcoding the route here. You'll need to require the controller, and
// reference the various controller actions in this file.

router.get('/', controller.index);
router.get('/:id', controller.show);

router.post('/', (req, res) =>{
	res.send("Creating a post");
});

module.exports = router;
