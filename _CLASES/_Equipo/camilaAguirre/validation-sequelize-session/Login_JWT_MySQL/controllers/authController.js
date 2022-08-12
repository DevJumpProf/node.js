const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const UserModel = require('../models/UserModel');
const {promisify} = require('util')
const { validationResult } = require("express-validator");
 /* require('dotenv').config(); */

//procedimiento para registrarnos
exports.register = async (req, res)=>{    
    
    const {name,user,pass,email} = req.body
    const avatar = req.files[0].filename

    let errors = validationResult(req); /* traemos en una variable los errores que se guarden */
    console.log(errors);
    if(!errors.isEmpty()) {
        return res.render("register", { errors: errors.array(), old: req.body})
        
    }else{

    try {
        UserModel.create({
            name: name,
            user: user,
            pass:  await bcryptjs.hash(pass, 10), // error de password se soluciona con await, esperaba una promesa
            email: email,
            avatar : avatar
        })
        res.render('login')
    } catch (error) {
        console.log(error);
    }

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
                const usuario = await UserModel.findAll({
                    where : {user:user}
                })
                if(  usuario.length == 0 || ! (await bcryptjs.compare(pass, usuario[0].pass)) ){ // corregimos el length || aunque por mas que este corregido si se hace andar la terminal y estan resueltos los demas problemas tira un error con length con el que lo resuelvo al comentar y descomentar para que tome el cambio con nodemon pero no lo toma al principio
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
                    //inicio de sesión OK
                    const id = usuario[0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, { // agregamos las variables de JWT en el archivo .env
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    //generamos el token SIN fecha de expiracion
                   //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
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
            const usuario = await UserModel.findAll({
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
    return res.redirect('/')
}