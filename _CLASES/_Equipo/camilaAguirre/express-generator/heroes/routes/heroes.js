const express = require('express');
const router = express.Router();

const heroesController =  require('../controllers/heroesControllers');

router.get('/', heroesController.index);

module.exports = router;