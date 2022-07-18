var express = require('express');
var router = express.Router();
const mainControllers= require('../controllers/mainControllers');



/* GET home page. */
router.get('/', mainControllers.index);

module.exports = router;
