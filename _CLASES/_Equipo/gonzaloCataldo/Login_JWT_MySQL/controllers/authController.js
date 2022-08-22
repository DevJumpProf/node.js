const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const RegisterModel = require("../models/RegisterModel.js")
const bcryptjs = require('bcryptjs')
const {validationResult } = require('express-validator');
const fs = require("fs");
const db = require("../database/db.js")


//Falta validar el avatar, todo lo demas ya esta validado y la pass esta hasheada 
exports.register = registerUser = async(req, res)=>{
    let errors = (validationResult(req));
    const {name,user,email} = req.body
    const avatar = (req.files[0]) ? req.files[0].filename : "default.jpg"
    const pass = await bcryptjs.hash(req.body.pass, 10)
    if ( errors.isEmpty()){
    try {
        await RegisterModel.create({
            name: name,
            user: user,
            pass: pass,
            email: email,
            avatar: avatar
        })
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.redirect("/login")
    }catch (error) {
        res.json({message:error.message})
    }
}   else{
    console.log(errors)

    return res.render ("register", {errors:errors.errors})
    }
}

exports.login = async (req, res)=>{
try {
    const user = req.body.user
    const pass = req.body.pass        

    if(!user || !pass ){
        res.render('login',{
            alert:true,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y password",
            alertIcon:'info',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        })
    }else{
            const usuario = await RegisterModel.findAll({
                where : {user:user}
            })
            if(  usuario.length == 0 || ! (await bcryptjs.compare(pass, usuario[0].pass)) ){
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o Password incorrectas",
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'    
                })
            }else{
                const id = usuario[0].id
                req.session.userNew = {
                    id: usuario[0].id,
                    username: usuario[0].name,
                    apellido: usuario[0].apellido,
                    email: usuario[0].email,
                    avatar: usuario[0].avatar,
                    pass: usuario[0].pass
                }
                const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
               console.log("TOKEN: "+token+" para el USUARIO : "+user)

               const cookiesOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
               }
               res.cookie('jwt', token, cookiesOptions)
               res.render('login', {
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon:'success',
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

exports.isAuthenticated = async (req, res, next)=>{
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const usuario = await RegisterModel.findAll({
                where : {id : decodificada.id}
            })
                if(!usuario){return next()}
                req.user = usuario[0]
                return next()
        
        } catch (error) {
            console.log(error)
            return next()
        }
    }else{
        res.redirect('/login')        
    }
}

exports.logout = (req, res)=>{
    res.clearCookie('jwt')   
    res.redirect('/')
} 


exports.getAllUsers = async (req,res) => {
    try {
        const usuarios = await RegisterModel.findAll();
        res.render('usuarios',{usuarios:usuarios, usuarioLogueado: req.user})
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async (req,res) =>{
    try {
        const usuario = await RegisterModel.findAll({
        where : {id : req.params.id}
        })
        console.log(req.user)
        res.render("usuario",{usuario:usuario, usuarioLogueado : req.user})
    } catch (error) {
        console.log(error);
    }
}


exports.deleteUser = async (req,res) => {
    try {
        const seleccionado = await RegisterModel.findByPk(req.params.id)
    if(seleccionado.id == req.session.userNew.id) {
        await RegisterModel.destroy({
            where:{
                id:req.params.id
            }
        })
        fs.unlinkSync(`public/img/${seleccionado.avatar}`)
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.clearCookie('jwt')
        res.redirect('/login');
    } else {
        await RegisterModel.destroy({
            where:{
                id:req.params.id
            }
        })
        fs.unlinkSync(`public/img/${seleccionado.avatar}`)
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.redirect('/usuarios');
    }
    } catch (error) {
        console.log(error);
    }
    }

    exports.updateUser = async (req,res) => {
        try {
          const usuarios = await RegisterModel.findAll({
            where : {id : req.params.id}
            });
            if(usuarios){
                res.render('editarUsuario',{usuarios:usuarios[0]})
            }else{
                res.redirect('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    exports.processUpdateUser = async (req,res) => {
        let errors = (validationResult(req));
        const usuarioEditar = await RegisterModel.findByPk(req.params.id)
        if ( errors.isEmpty()){
        try {
            const {name,user,email,pass} = req.body;
            const avatar = (req.files[0]) ? req.files[0].filename : usuarioEditar.avatar
            await RegisterModel.update({
                name : name,
               user : user,
               pass :  pass == "" ? req.session.userNew.pass : bcryptjs.hashSync(pass, 10),
               email : email,
               avatar : avatar
            },{
                where : {
                  id : req.params.id
                }
            })
                res.redirect('/usuarios')
        } catch (error) {
            console.log(error);
        }

    }   else{
        console.log(errors)
        return res.render ("editarUsuario", {errors:errors.errors, usuarios: usuarioEditar})
        }
    }