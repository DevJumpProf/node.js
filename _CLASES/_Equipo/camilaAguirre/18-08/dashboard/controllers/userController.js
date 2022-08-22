const bcryptjs = require('bcryptjs')
const UserModel = require('../models/UserModel');
const { validationResult } = require("express-validator");

const login = (req,res) => {
    res.render('login')
}
const register = (req,res) => {
    res.render('register')
}

const processRegister = (req,res) => {
    let errors = validationResult(req);
    const {name,lastName,email,password,password2} = req.body;
    


}

module.exports = {
    login,
    register
}