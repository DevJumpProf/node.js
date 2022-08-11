const { check } = require('express-validator');
const PostModel = require("../models/PostModel.js")
const checks = [
    check("name").isLength(),
    check("user").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("la Contraseña debe estar completa con un minimo de 8 caracteres"),
    check("email").isEmail().withMessage("El email no tiene un formato correcto.")
]
module.exports = checks

const createPost = async(req, res)=>{
    try {      //metodo que permite crear un registro
        await PostModel.create(req.body)
        res.render("login")
    } catch (error) {
        res.json({message:error.message})
    }
}
module.exports = createPost