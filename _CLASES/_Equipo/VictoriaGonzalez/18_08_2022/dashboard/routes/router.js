//Require
const express = require('express');
// Require controllers
const { createUser, login, principalView, register, viewTables, viewNotifications } = require("../controllers/pageControllers.js");7
const router = express.Router();
const pageController = require('../controllers/pageControllers.js');
const upload = require('../Middleware/uploadImages.js');
const validations = require('../validations/validationRegister.js')
// Router for views
router.get('/', principalView);
router.get('/tables', viewTables);
router.get('/notifications', viewNotifications);
router.get('/register', register);
router.get('/login', login);
//Router for controllers methods
router.post('/register', validations, upload.any(), createUser);




//Export router
module.exports = { routes: router };


