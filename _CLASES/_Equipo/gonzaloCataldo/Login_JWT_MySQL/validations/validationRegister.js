const { check } = require('express-validator');

const checks = [
    check("name").isLength(),
    check("user").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("La contraseña debe estar completo con un minimo de 8 caracteres"),
    check("email").isEmail().withMessage("El email no tiene un formato correcto.")
]
module.exports = checks


