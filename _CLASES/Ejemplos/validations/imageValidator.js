const {check,validationResult,body} = require('express-validator');
const path = require('path');

    body('image')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Tenés que subir una imagen"),
    body('image')
    .custom((value,{req})=>{
        value = req.files[0].filename
        let extension = path.extname(value)

        return extension = '.jpg' || extension == '.jpeg' || extension == '.png' || extension == '.gif';
    })
    .withMessage("El formato de la imagen debe ser: jpg, jpeg, png o gif")
