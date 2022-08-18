// Requerimos el modulo de express-validator
import { request } from 'express';
import { check, validationResult, body } from 'express-validator';
import userModel from '../models/userModel.js';

const registerValidator = [
    check("name").notEmpty().withMessage("No puede estar vacio"),
    check("user").isLength({ min: 5 }).withMessage("El nombre de usuario debe contener como minimo 5 caracteres"),
    check("email").isEmail().withMessage("Debe ingresar un correo electronico"),
    check("pass").isLength({ min: 8 }).withMessage("La contraseña debe contener como minimo 8 caracteres"),
    body("pass2")
    .custom((value, {req}) => {
        if(value != req.body.pass){
            return false
        }
        return true
    }).withMessage("Deben coincidir las dos contraseñas"),
    body("user")
        .custom(function (value) {
            return userModel.findOne({
                where: { user: value }
            })
                .then(user => {
                    if (user) {
                        return Promise.reject("Este usuario ya está registrado en nuestra BDD")
                    }
                })
        })
]

export default registerValidator