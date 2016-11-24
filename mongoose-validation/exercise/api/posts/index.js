var express = require('express');
var router = new express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/comments', controller.createComment);
router.put('/:id', controller.update);

module.exports = router;
