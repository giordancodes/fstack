var express = require('express');
var router = new express.Router();
var controller = require('./controller');

// all types of operations supported
router.get('/', controller.index);
router.get('/:id', controller.show);

// router.post('/', controller.create);
// router.patch('/:id', controller.update);
// router.delete('/', controller.delete);


module.exports = router;
