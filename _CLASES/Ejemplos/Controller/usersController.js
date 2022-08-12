const bcrypt = require('bcrypt');

const { validationResult, Result } = require('express-validator');

const db = require('../database/models');
/*
REQUERÍ LA BASE DE DATOS
*/


module.exports = {
    register: function (req, res) {
        //guardo los nombres en subCategorias para despues mostrarlos y ordenar el nombre alfabeticamente.
        db.Subcategorias.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
            .then(subCategorias => {
                res.render('userRegister', {
                    title: "Registro de Usuario",
                    css: 'index.css',
                    script: 'userRegister.js',
                    subCategorias: subCategorias
                })
            })
            .catch(error => {
                res.send(error)
            })

    },
    processRegister: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            db.Users.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                password: bcrypt.hashSync(req.body.pass, 10),
                avatar: (req.files[0]) ? req.files[0].filename : "default.png",
                rol: "user"
            })
                .then(usuario => {
                    //console.log(usuario)
                    return res.redirect('/users/login')
                })
                .catch(err => {
                    res.send(err)
                })

        } else {
            db.Subcategorias.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
                .then(subCategorias => {
                    res.render('userRegister', {
                        title: "Registro de Usuario",
                        css: "index.css",
                        errors: errors.mapped(),
                        subCategorias: subCategorias,
                        old: req.body,
                        script: 'userRegister.js'
                    })
                })

        }

    },
    login: function (req, res) {
        db.Subcategorias.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
            .then(subCategorias => {
                res.render('userLogin', {
                    title: "Ingresá a tu cuenta",
                    css: 'register.css',
                    script: 'userlogin.js',
                    subCategorias: subCategorias
                })
            })
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        nick: user.nombre + " " + user.apellido,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.rol
                    }
                    if (req.body.recordar) {
                        res.cookie('userPetShopVSG', req.session.user, { maxAge: 1000 * 60 * 60 })
                    }
                    res.locals.user = req.session.user
                    return res.redirect('/')
                })
                .catch(err => {
                    res.send(err)
                })

        } else {
            db.Subcategorias.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
                .then(subCategorias => {
                    res.render('userLogin', {
                        title: "Ingresá a tu cuenta",
                        css: "register.css",
                        errors: errors.mapped(),
                        subCategorias: subCategorias,
                        old: req.body,
                        script: 'userlogin.js'
                    })
                })
                .catch(error => {
                    res.send(error)
                })

        }
    },
    profile: function (req, res) {
        let subCategorias = db.Subcategorias.findAll({
            order: [
                ['name', 'ASC']
            ]
        })

        let user = db.Users.findByPk(req.session.user.id)
        Promise.all(([subCategorias, user]))
            .then(([subCategorias, user]) => {
                res.render('userProfile', {
                    title: "Perfil de usuario",
                    css: "profile.css",
                    script: "userProfile.js",
                    usuario: user,
                    subCategorias: subCategorias
                })
            })
            .catch(error => {
                res.send(error)
            })

    },
    ///LOS DATOS SE ACTUALIZAN , PERO NO SE SINCRONIZA LA IMAGEN EN EL HEADER, SOLO HASTA QUE CIERRO LA SESSION
    editProfile: (req, res) => {

        db.Users.update({
            nombre: req.body.nombre.trim(),
            apellido: req.body.apellido.trim(),
            direccion: req.body.direccion.trim(),
            ciudad: req.body.ciudad,
            provincia: req.body.provincia,
            fecha: req.body.fecha,
            avatar: (req.files[0]) ? req.files[0].filename : "default.png"
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(resultado => {

                return res.redirect('/users/profile')
            })
            .catch(error => {
                res.send(error)
            })
    },
    logout: function (req, res) {
        req.session.destroy()
        if (req.cookies.userPetShopVSG) {
            res.cookie('userPetShopVSG', ' ', { maxAge: -1 });
        }
        return res.redirect('/')
    },
    eliminar: (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                fs.unlinkSync('./public/images/users/' + user.avatar);
                db.Users.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(result => {
                        req.session.destroy();
                        return res.redirect('/');
                    })
                    .catch(error => {
                        res.send(error);
                    })
            })
    }

}