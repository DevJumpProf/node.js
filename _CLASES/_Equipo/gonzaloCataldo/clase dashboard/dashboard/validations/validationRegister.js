const { check, body } = require('express-validator');
const UserModel = require("../models/UserModel.js")

const checks = [
    check("name").notEmpty().withMessage("Ingrese un nombre"),
    check("user").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("La contraseña debe estar completo con un minimo de 8 caracteres"),
    check("email").isEmail().withMessage("El email no tiene un formato correcto."),
    body("user").custom(value=>{
        return  UserModel.findOne({
            where:{
               user:value
            }
         }).then(result=>{
            if (result) {
                  return  Promise.reject('Error el usuario ya esta registrado')
            }
         })})
         
]


module.exports = checks


