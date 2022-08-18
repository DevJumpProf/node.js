const {check,body}= require('express-validator');
const path = require('path')
module.exports = [
    check('name').notEmpty().withMessage('El "Nombre completo" es obligatorio'),
    check('name').isLength({min:2}).withMessage('El "Nombre completo" tiene que tener un minimo de 2 caracteres'),
    check('user').notEmpty().withMessage('El "Nombre de usuario" es obligatorio'),
    check('user').isLength({min:2}).withMessage('El "Nombre de usuario" tiene que tener un minimo de 2 caracteres'),
    check('email').isEmail().withMessage('El email tiene que ser un email verificado'),
    /* body('image')
    .custom((value,{req})=>{
        value = req.files[0].filename
        let extension = path.extname(value)

        return extension = '.jpg' || extension == '.jpeg' || extension == '.png' || extension == '.gif';
    })
    .withMessage("El formato de la imagen debe ser: jpg, jpeg, png o gif") */
]