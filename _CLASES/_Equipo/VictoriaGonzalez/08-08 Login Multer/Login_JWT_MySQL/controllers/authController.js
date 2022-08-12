const jwt = require('jsonwebtoken')
const conexion = require('../database/db')
const { promisify } = require('util')
const loginModel = require("../models/loginModel.js")
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');


exports.createUser = async (req, res) => {
    let errors = (validationResult(req));
    const { name, user, email } = req.body
    const avatar = req.files[0].filename
    const pass = await bcryptjs.hash(req.body.pass, 10)
    if (errors.isEmpty()) {
        try {      //metodo que permite crear un registro
            await loginModel.create({
                name: name,
                user: user,
                pass: pass,
                email: email,
                avatar: avatar
            })
            res.redirect("/login")
        } catch (error) {
            res.json({ message: error.message })
        }
    } else {
        return res.render("register", { errors: errors.errors })
    }
}


exports.login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (!user || !pass) {
            res.render("login", {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else {
            const usuarioPass = await loginModel.findAll({
                where: { user: user }
            })
            if (usuarioPass.length == 0 || !(await bcryptjs.compare(pass, usuarioPass[0].pass))) {
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o Password incorrectas",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            } else {
                //inicio de sesión OK
                const id = usuarioPass[0].id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
                //generamos el token SIN fecha de expiracion
                //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
                console.log("TOKEN: " + token + " para el USUARIO : " + user)
                const cookiesOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions)
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 800,
                    ruta: ''
                })
            }
        }
    }catch (error) {
        console.log(error)
    }
}






    
/*exports.isAuthenticated = async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=>{
                if(!results){return next()}
                req.user = results[0]
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')        
    }
}*/

exports.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const userId = await loginModel.findAll({
                where: { id: decodificada.id }
            })
            if (!userId) { return next() }
            req.user = userId[0]
            return next()
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        res.redirect('/login')
    }
}


exports.logout = (req, res) => {
    res.clearCookie('jwt')
    return res.render('/login')
}

exports.logout = (req, res)=>{
    req.session.destroy();
    res.send("logout success!");
  };