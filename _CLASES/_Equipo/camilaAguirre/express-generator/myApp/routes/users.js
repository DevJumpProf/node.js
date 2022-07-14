var express = require('express');
var router = express.Router();

const usersControllers = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', usersControllers.user);
router.get('/:id', usersControllers.show);

module.exports = router;
