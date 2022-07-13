var express = require('express');
var router = express.Router();
const userController = require ("../controllers/userController")

/* GET users listing. */
router.get('/', userController.index);

router.get ('/:idUser', userController.idUser);

router.get ('/:idUser/:idLenguajes', userController.idLenguajes);



module.exports = router; 
