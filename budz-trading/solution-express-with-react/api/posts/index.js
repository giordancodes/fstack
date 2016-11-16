var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.get('/:id', controller.show);
// router.get('/delete/:id', controller.delete);

module.exports = router;