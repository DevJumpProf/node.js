import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes/router.js';
import db from './database/db.js';

const app = express()
const port = 3000;

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
app.use('/', router)

//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

// Configurar Error 404
app.use((req,res,next) => {
    res.status(404).render('error')
    next();
});

//////
try {
    db.authenticate()
    console.log('¡Conectado a la base de datos MySQL!');
} catch (error) {
        console.log(`El error en la conexion es: ${error}`);
}

//////
app.listen(port, ()=>{
    console.log('SERVER UP running in http://localhost:3000')
})