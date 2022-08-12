const { check, validationResult, body } = require('express-validator');
const userModel = require('../models/userModel.js');

module.exports = [
    check('name').isLength().withMessage('Ingrese nombre'),
    check('user').isLength({ min: 4 }).withMessage('El usuario debe tener minimo 4 caracteres'),
    check('pass').isLength({ min: 8 }).withMessage('La contraseña debe tener minimo 8 caracteres'),
    check('email').isEmail().withMessage('Ingrese email válido'),
    /* body('user').custom(function(user){
        return new Promise((resolve,reject) => {
            const userValidation = userModel.findAll({
                where: { user: user }
            })
                if(!userValidation.length == 0){
                    reject(new Error('El usuario ya existe'))
                }
                resolve()
        })
    }).withMessage('Usuario ya registrado') */
    body('user')
        .custom(function (value) {
            return userModel.findOne({
                where: {
                    user: value
                }
            })
                .then(user => {
                    if (user) {
                        return Promise.reject('Este usuario ya se encuentra registrado')
                    }
                })
        }),
    body('pass2')
        .custom((value, { req }) => {
            if (value != req.body.pass) {
                return false
            }
            return true
        })
        .withMessage("Las constraseñas no coiciden"),
]