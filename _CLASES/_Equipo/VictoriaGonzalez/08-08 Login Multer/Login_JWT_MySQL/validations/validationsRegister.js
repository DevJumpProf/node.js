const {check, validationResult, body} = require('express-validator');

module.exports = [
    
    check('name').isLength({min: 2}).withMessage('Ingrese un nombre de mínimo 2 caracteres'),
    check('user').isLength({min: 4}).withMessage('El usuario debe tener minimo 4 caracteres'),
    check('pass').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email en el campo')
    ]