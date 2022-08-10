const { check, body} = require("express-validator");
const path = require('path'); /* requerimos path para la validacion de la imagen */


module.exports = [
    check("name")
    .notEmpty().withMessage('Debes ingresar tu nombre completo').bail()
    .isLength({min:2}).withMessage('El nombre debe tener como minimo 2 caracteres'),

    check('user')
    .notEmpty().withMessage('Debes ingresar un nombre de usuario').bail()
    .isLength({min:4, max: 10}).withMessage('el nombre de usuario tiene que tener entre 4 y 10 caracteres'),
    
    check('email')
    .notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un email valido'),

    body("avatar") /* validacion de la subida de archivos para que solo pueda ser subido cierto tipo de archivo imagen */
    .custom((value, {req}) => {
        
        if(req.file){
            let file = path.extname(req.file.filename).toUpperCase()
            
            if (file == ".JPG" || file == ".JPEG" || file == ".PNG" || file == ".GIF"){
                return true
            }else{
                return false
            }
        }else{
            return true
        }
    }).withMessage('Solo se pueden cargar archivos JPG, JPEG, PNG, GIF'),

    check("pass")
    .notEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({ min: 3 }).withMessage("La contraseña debe tener como minimo 3 caracteres")
]