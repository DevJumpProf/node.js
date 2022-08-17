const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const db = require("./database/db.js")
const dotenv = require('dotenv')
const session = require("express-session")

    try {
        db.authenticate()
        console.log("conexion exitosa")
    } catch (error) {
        console.log(`el error en conexion es: ${error}`)
    }

dotenv.config({path: './env/.env'})

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session( {secret: "Nuestro mensaje secreto",resave: true, saveUninitialized: true}));

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


app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000')
})