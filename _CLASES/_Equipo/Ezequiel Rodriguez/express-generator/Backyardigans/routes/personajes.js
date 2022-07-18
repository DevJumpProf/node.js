var express = require('express');
var router = express.Router();
const personajesController = require("../controllers/personajesController")

/* GET home page. */
router.get('/', personajesController.index);
router.get('/:id', personajesController.show);
router.get('/:id/:bio?', personajesController.bio);

module.exports = router;