const {check, validationResult, body} = require('express-validator');
const userModel = require("../models/userModel.js")



module.exports = [
    
    check('name').notEmpty().withMessage('Ingrese su nombre'),
    check('user').isLength({min: 4}).withMessage('El usuario debe tener minimo 4 caracteres'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email en el campo'),
    
    /*body('avatar') /* validacion de la subida de archivos para que solo pueda ser subido cierto tipo de archivo imagen */
   /*  .custom((value, {req}) => {
        
        if(req.body.file){
            let file = path.extname(req.body.file.filename).toUpperCase()
            
            if (file == ".JPG" || file == ".JPEG" || file == ".PNG" || file == ".GIF"){
                return true
            }else{
                return false
            }
        }else{
            req.avatar 
        }

    }).withMessage('Solo se pueden cargar archivos JPG, JPEG, PNG, GIF'), 
    */
    body('user')
    .custom(function(value){
       return userModel.findOne({
           where : {
               user: value
           }
       })
       .then(user => {
           if(user){
               return Promise.reject('Este usuario ya existe en nuestra bd')
           }
       })
    }),
/*    body('pass2')
    .custom((value,{req}) => {
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coiciden"),

/*    body('birthday')
    .custom(function(value){
       return loginModel.findOne({
           where : {
               birthday: value
           }
       })
       .then(birthday => {
        let date = new (Date)
        let day = (date.getDay)
        let edad = (date.getFullYear()) - (birthday.getFullYear())


           if(edad <18){
               return Promise.reject('Debe ser mayor a 18 años para registrarse')
           }
       })
    })

  /*  body('user').custom(function(value,{user}){


        conexion.query("SELECT user FROM users where user = ?", req.body.user, async(error,results) => {
        if (!results.length == 0){
          return false
        }
        })
    }).withMessage("lacuenta ya existe") */
    
    ]