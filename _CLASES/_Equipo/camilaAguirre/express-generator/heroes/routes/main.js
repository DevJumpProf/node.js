const express = require('express');
const router = express.Router();

const mainController =  require('../controllers/mainControllers');

router.get('/', mainController.index);
router.get('/creditos', mainController.creditos);

module.exports = router;
