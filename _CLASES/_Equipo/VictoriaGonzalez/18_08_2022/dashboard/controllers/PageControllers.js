//Require model
const userModel = require('../models/userModel.js');
// Require bcrypt to hash passwords
const bcryptjs = require('bcryptjs');
// Require jwt to ?
const jwt = require('jsonwebtoken')
// Require to validations
const { validationResult } = require('express-validator')
// Require to ?
const { promisify } = require('util')
//To render home
const principalView = (req, res) => { res.render('home') };
//To render tables
const viewTables = (req, res) => { res.render('tables') };
//To render notifications
const viewNotifications = (req, res) => { res.render('notifications') };
//To render login
const login = (req, res) => {res.render('login')};
//To render register
const register = (req, res) => { res.render('register') };

const createUser = async(req, res)=>{
    let errors =(validationResult(req));
    if(errors.isEmpty()) {
        try{
            const{name, user, email, pass} = req.body;
            const password = await bcryptjs.hash(pass, 10);
            console.log(password);

            const avatar = "default.png"
            await  userModel.create({
                name:name,
                user:user,
                password:password,
                email:email,
                avatar:avatar
            })
            res.redirect('/register')
        }catch(error){
            console.log({message:error.message})
        }
    }else{
        return res.render('register', {errors:errors.errors})
    }
}

//Export controllers
module.exports = { createUser, login, register, principalView, register, viewNotifications, viewTables }




