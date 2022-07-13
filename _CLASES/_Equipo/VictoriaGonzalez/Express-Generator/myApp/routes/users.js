var express = require('express');
var router = express.Router();
const userControllers = require("../controllers/userController")
/* GET users listing. */
router.get('/', userControllers.index);
router.get('/:id', userController.show);


module.exports = router;
