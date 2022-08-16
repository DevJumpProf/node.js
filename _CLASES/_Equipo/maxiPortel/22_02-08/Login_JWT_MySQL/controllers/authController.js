const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { promisify } = require('util');
const userModel = require('../models/userModel.js');
const { check, validationResult, body } = require('express-validator');

//procedimiento para registrarnos
exports.register = async (req, res, next) => {

    let errors = validationResult(req);
    /* console.log(errors); */
    if (errors.isEmpty()) {
        try {
            const name = req.body.name
            const user = req.body.user
            const pass = await bcryptjs.hash(req.body.pass, 10)
            const avatar = req.files[0] ? req.files[0].filename : "default.png"
            const email = req.body.email
            await userModel.create({ user: user.toLowerCase(), name: name, pass: pass, avatar: avatar, email: email });
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    } else {
        return res.render('register', { errors: errors.errors })
    }
}

exports.login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (!user || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        } else {
            const usuarioPass = await userModel.findAll({
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
    } catch (error) {
        console.log(error)
    }
}

exports.isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const userId = await userModel.findAll({
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
    return res.redirect('/')
}