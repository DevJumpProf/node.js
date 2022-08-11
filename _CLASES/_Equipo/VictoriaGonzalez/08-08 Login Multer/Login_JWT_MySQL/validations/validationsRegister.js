const {check, validationResult, body} = require('express-validator');
const conexion = require('../database/db')



module.exports = [
    
    check('name').notEmpty().withMessage('Ingrese su nombre'),
    check('user').isLength({min: 4}).withMessage('El usuario debe tener minimo 4 caracteres'),
    check('pass').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email en el campo'),
    body('user').custom(function(value,{user}){


        conexion.query("SELECT user FROM users where user = ?", req.body.user, async(error,results) => {
        if (!results.length == 0){
          return false
        }
        })
    }).withMessage("lacuenta ya existe")
    
    ]