var express = require('express');
var router = express.Router();
const userControllers = require ("../controllers/userControllers")

/* GET users listing. */
router.get('/', userControllers.users);
router.gett('/:id', )


module.exports = router;
