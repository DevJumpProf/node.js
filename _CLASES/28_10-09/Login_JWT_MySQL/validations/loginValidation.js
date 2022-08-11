const {check,validationResult,body}= require ("express-validator")
const conexion = require('../database/db')



module.exports = [
    check("name").notEmpty().withMessage("El Campo no puede estar vacio"),
    check("user").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("la Contraseña debe estar completa con un minimo de 8 caracteres"),
    check ("email").isEmail().withMessage("el email no es correcto"),
    ///*     body('user').custom(function(value)
    ]
