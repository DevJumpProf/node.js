const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('name').isLength().withMessage('Ingrese nombre'),
    check('user').isLength({min: 4}).withMessage('El usuario debe tener minimo 4 caracteres'),
    check('pass').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
    check('email').isEmail().withMessage('Ingrese email válido')
    ]