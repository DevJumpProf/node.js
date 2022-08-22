const express = require("express");
const router = express.Router();
const { principalView, tablesView, notificationsViews } = require('../controllers/pageControllers');
const { login, register } = require("../controllers/userController");


router.get('/',principalView);
router.get('/tables', tablesView);
router.get('/notifications', notificationsViews);
router.get('/login', login);
router.get('/register', register);

module.exports = {routes : router}