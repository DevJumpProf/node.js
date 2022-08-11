// Requerimos el modulo de express-validator
const { check, validationResult, body } = require('express-validator');
const conexion = require('../database/db');



module.exports = [
    check("name").notEmpty().withMessage("No puede estar vacio"),
    check("user").isLength({min:5}).withMessage("El nombre de usuario debe contener como minimo 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("La contraseña debe contener como minimo 8 caracteres"),
    check("email").isEmail().withMessage("Debe ingresar un correo electronico"),
    body("user").custom(function(value){
        conexion.query("SELECT user FROM users WHERE user = ?", req.body.user, async(error,results)=>{
            if(!results.length == 0){
                return true
            }
        })
    }).withMessage("El nombre de usuario ya existe")
]