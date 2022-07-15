const express = require('express');
const router = express.Router();
const personajesController = require('../controllers/personajesController');
/* GET home page. */
router.get('/',personajesController.personajes);
router.get('/:id',personajesController.id)

module.exports = router;
