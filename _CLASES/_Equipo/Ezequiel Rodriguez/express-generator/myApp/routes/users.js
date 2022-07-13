var express = require('express');
var router = express.Router();
const usersController = require("../controllers/userController");

/* GET users listing. */
router.get('/', usersController.index);

router.get('/:idUser', usersController.idUser);

router.get('/:idUser/:idLenguajes', usersController.idLenguajes);

module.exports = router; 
