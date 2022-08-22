const express = require('express');
const router = express.Router();
const {viewLogin, viewNotifications, viewPrincipal, viewRegister, viewTables} = require('../controllers/pageController.js')

router.get('/', viewPrincipal);
router.get('/tables', viewTables);
router.get('/notifications', viewNotifications);
router.get('/login', viewLogin);
router.get('/register', viewRegister);

module.exports = router;