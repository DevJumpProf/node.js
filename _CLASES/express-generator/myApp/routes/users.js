var express = require('express');
var router = express.Router();
const userController = require ("../controllers/userController")

/* GET users listing. */
router.get('/', userController.index);
/* app.get('/:id', function (req,res) {
  let idUser = req.params.id;   //rutas parametrizadas
  })*/
module.exports = router; 
