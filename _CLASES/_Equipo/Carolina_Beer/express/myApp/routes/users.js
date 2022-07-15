var express = require('express');
var router = express.Router();
const userControllers = require ("../controllers/userController")
/* GET users listing. */
router.get('/', userControllers.users)
router.get('/', userControllers.users)

module.exports = router;
