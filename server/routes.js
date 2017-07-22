var controller = require('./controllers/index');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.options('/messages', controller.messages.options);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.options('/users', controller.users.options);


module.exports = router;

