const express = require('express');
const router = express.Router();
const cursosControllers = require('../controllers/cursosControllers');

router.get('/', cursosControllers.index);

module.exports = router;