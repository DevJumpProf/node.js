// Requerimos las librerias
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const router = require ('./routes/routes.js');
const sequelize = require('sequelize');
const db = require('./database/db.js');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Configuramos el motor de vista
app.set('view engine', 'ejs');
// EL USO DEL LAYOUT DEBE IR DEBAJO DEL MOTOR DE VISTAS
app.use(expressLayouts);
// Utilizamos el router
app.use(router);
//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//seteamos las variables de entorno
dotenv.config({path: './env/.env'})
//para poder trabajar con las cookies
app.use(cookieParser())
//
app.use(express.static(path.join(__dirname, 'public')));
//
try {
    db.authenticate()
    console.log("Successful connection to SQL Database!");
} catch (error) {
    console.log(`Connection error: ${error}`);
};
//
app.listen(port, ()=> {console.log(`Server up running in http://localhost:${port}`)});