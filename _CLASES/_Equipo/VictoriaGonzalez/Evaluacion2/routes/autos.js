var express = require('express');
var router = express.Router();
const autosController = require("../controllers/autosController");

router.get('/autos', autosController.autos);
router.get('/autos/:marca', autosController.autosmarca);
module.exports = router;


