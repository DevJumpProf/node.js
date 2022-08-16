const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util');
const {validationResult} = require('express-validator');
const UserModel = require('../../../24_11-08/models/UserModel');

//procedimiento para registrarnos
exports.register = async (req, res,next)=>{    
    try {
         
        const name = req.body.name
        const user = req.body.user
        const pass = await bcryptjs.hash(req.body.pass, 10)     
        const avatar = req.files[0].filename
        const email = req.body.email
        //console.log(pass) 
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()){
            res.render('register',{
                errors:errors.errors
            })
        }else{
            conexion.query('ALTER TABLE users AUTO_INCREMENT = 0;');
        
            conexion.query('INSERT INTO users SET ?', {user:user, name: name, pass:pass,avatar:avatar, email:email}, (error, results)=>{
                if(error){console.log(error)}
                res.redirect('/')
            })
        }
        
    } catch (error) {
        console.log(error)
    }       
}

exports.login = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass        
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()){
            res.render('login',{
                errors:errors.error,
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Error",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login',
                
            })
        }else{
            conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
                   //inicio de sesión OK
                   const id = results[0].id
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
            }) 
        }
       /*  if(!user || !pass ){
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
            conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
                if(  results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass)) ){ // corregimos el length || aunque por mas que este corregido si se hace andar la terminal y estan resueltos los demas problemas tira un error con length con el que lo resuelvo al comentar y descomentar para que tome el cambio con nodemon pero no lo toma al principio
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
                    const id = results[0].id
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
            })
        } */
    } catch (error) {
        console.log(error)
    }
}

exports.isAuthenticated = async (req, res, next)=>{
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
}

exports.logout = (req, res)=>{
    res.clearCookie('jwt')   
    return res.redirect('/')
}