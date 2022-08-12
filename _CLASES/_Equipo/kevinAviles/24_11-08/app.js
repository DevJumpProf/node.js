const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express()
const port = 8000;
const db = require('./database/db')
const methodOverride = require('method-override');
//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'));
try {
    db.authenticate();
    console.log("Conexion extiosa, base de datos conectada\nFelicidades !! :D");
} catch (error) {
    console.log(`el error en conexion es: ${error}\nVales madres D:`);    
}


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



app.listen(port, ()=>{
    console.log('SERVER UP runnung in http://localhost:8000')
})