const express = require('express')
 const dotenv = require('dotenv') 
const cookieParser = require('cookie-parser')
const app = express()
const db = require("./database/db.js")

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
 dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())

//llamar al router
app.use('/', require('./routes/router'))

//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

// async (req, res,next)=>{
    try {
        /* await */ db.authenticate()
        console.log("Conexión exitosa")
    } catch (error) {
        console.log(`El error en conexión es: ${error}`)
    }
//    }


// PORQUÉ NO LO MUESTRA POR CONSOLA?, ahora porque lo muestra comentando la linea 18 AAAAAAAA
app.listen(3000, ()=>{
    console.log('SERVER UP runnig in http://localhost:3000')
})