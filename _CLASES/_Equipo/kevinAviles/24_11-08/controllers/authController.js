const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const conexion = require('../database/db');
const UserModel = require('../models/UserModel');
const { promisify } = require('util');
const { validationResult } = require('express-validator');

//procedimiento para registrarnos
exports.register = async (req, res, next) => {
    try {

        const name = req.body.name
        const user = req.body.user
        const pass = bcrypt.hashSync(req.body.pass, 10);
        const avatar = req.files[0].filename
        const email = req.body.email
        //console.log(pass) 
        const errors = validationResult(req);
        /* console.log(errors); */
        if (!errors.isEmpty()) {
            res.render('register', {
                errors: errors.errors
            })
        } else {
            //conexion.query('ALTER TABLE users AUTO_INCREMENT = 0;');
            await UserModel.create({
                name: name,
                user: user,
                pass: pass,
                avatar: avatar,
                email: email
            })
            res.redirect('/');
            /* conexion.query('INSERT INTO users SET ?', {user:user, name: name, pass:pass,avatar:avatar, email:email}, (error, results)=>{
                if(error){console.log(error)}
                res.redirect('/')
            }) */
        }

    } catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    const user = req.body.user
    const pass = req.body.pass

    try {

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

            const result = await UserModel.findOne({
                where: {
                    user: user
                }
            })
            if (!result) {
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
                const id = result.id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, { // agregamos las variables de JWT en el archivo .env
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
            const user = await UserModel.findOne({
                where: {
                    id: decodificada.id
                }
            })
            if (!user) { return next(); }
            req.user = user
            return next()
            /* conexion.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=>{
                if(!results){return next()}
                req.user = results[0]
                return next()
            }) */
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
exports.listaUsers = async (req, res) => {
    const usuarios = await UserModel.findAll();
    

   /*  usuarios.forEach(element => {
        let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
        
        



        let difference = Math.abs(element.updatedAt - today);
        days = difference / (1000 * 3600 * 24);
        element.updatedAt = 9;
        console.log(element.updatedAt);
    });
    res.send(usuarios) */
    res.render('listaUser', {
        users: usuarios,
        user: req.user
    })
}
exports.userEdit = async (req, res) => {
    const usuario = await UserModel.findByPk(req.params.id);
    if (!usuario) {
        res.redirect('/');
    } else {
        res.render('userEdit', {
            old: usuario
        })
    }
}
exports.processEditUser = async (req, res) => {
    const { name, user, email } = req.body;
    const avatar = req.files[0].filename
    await UserModel.update({
        name: name,
        user: user,
        email: email,
        avatar: avatar
    }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/');
}

exports.deleteUser = async(req,res)=>{
    await UserModel.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/userList');
}