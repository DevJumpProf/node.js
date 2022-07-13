var express = require('express');
var router = express.Router();
const usersController = require("../controllers/userController");

/* GET users listing. */
router.get('/', usersController.index);

/* router.get('/:id', function (req, res) {
  let idUser = req.params.id;
});
*/

module.exports = router; 
