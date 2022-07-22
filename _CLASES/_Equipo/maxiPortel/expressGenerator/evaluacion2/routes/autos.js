const express = require('express');
const autosController = require('../controllers/autosController');
const router = express.Router();

router.get('/', autosController.index);
router.get('/:marca', autosController.marca);
router.get('/:marca/:dato?', autosController.datos);



module.exports = router;