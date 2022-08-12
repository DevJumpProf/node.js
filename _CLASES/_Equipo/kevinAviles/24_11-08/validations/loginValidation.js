const {check,body} = require('express-validator');
const UserModel = require('../models/UserModel');


module.exports=[
     check('user').notEmpty().withMessage("FALTA EL USUARIO"),
    check('pass').notEmpty().withMessage("FALTA EL pass") 
]