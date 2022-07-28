const express = require('express'); //requerimos express
const router = express.Router();

const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.index);


module.exports = router;