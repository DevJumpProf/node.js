var express = require('express');
var router = express.Router();


const controllers= require ('./c')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Express' });
});

module.exports = router;
