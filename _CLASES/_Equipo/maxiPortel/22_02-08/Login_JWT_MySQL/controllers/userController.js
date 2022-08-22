const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const userModel = require('../models/userModel.js');
const { check, validationResult, body } = require('express-validator');

//Lista de usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.render('listaUser', { user: req.user, users, title: 'Lista' });
    } catch (error) {
        res.render({ message: error.message });
    }
}


//editar usuario(Apretar el button)
exports.updateUser = async (req, res) => {
    try {
            const user = req.body.user
            const pass = await bcryptjs.hash(req.body.pass, 10)
            const avatar = req.files[0] ? req.files[0].filename : "default.png"
            const email = req.body.email
        await userModel.update({
            user: user.toLowerCase(),
                pass: pass,
                avatar: avatar,
                email: email,
                rol: 'user'}, {
            where: { id: req.params.id }
        })
        res.redirect('/')
    } catch (error) {
        res.render({ message: error.message, title: 'error' });
    }
}

//Obtener 1 usuario para editarlo
exports.getUser = async (req, res) => {
    try {
        const user = await userModel.findOne(({
            where: { id: req.params.id }
        }));
        res.render('editProfile', { user: user, title: 'Editar usuario' });
    } catch (error) {
        res.render({ message: error.message });
    }
}

//Borrar usuario
exports.deleteUser = async (req, res) => {
    try {
        await userModel.destroy({
            where: { id: req.params.id }
        })
        /* await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id") */
        res.redirect('listaUser')
    } catch (error) {
        res.render({ message: error.message });
    }
}