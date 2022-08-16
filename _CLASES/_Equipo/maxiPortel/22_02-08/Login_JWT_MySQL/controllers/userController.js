const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const userModel = require('../models/userModel.js');
const { check, validationResult, body } = require('express-validator');


exports.getAllUsers = async(req, res) => {
    try {
        const users = await userModel.findAll();
        res.render('listaUser', { user: req.user, users });
    } catch (error) {
        res.render({message: error.message});
    }
}

exports.updateUser = async (req, res) =>{
    try {
        await userModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.redirect('/listaUser')
    } catch (error) {
        res.render({message: error.message});
    }
} 

exports.getUser = async(req,res) => {
    try {
        const user = await userModel.findOne(({
            where: {id: req.params.id}
        }));
        console.log(user);
        res.render('editUser', { user: user });
    } catch (error) {
        res.render({message: error.message});
    }


}

exports.deleteUser = async(req,res) => {
    try {
        await userModel.destroy({
            where: {id: req.params.id}
        })
        res.redirect('listaUser')
    } catch (error) {
        res.render({message: error.message});
    }
}