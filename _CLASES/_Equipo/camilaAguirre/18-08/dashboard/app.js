const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const db = require('./database/db');

const app = express()
const port = 3000;



app.set('view engine','ejs')
app.use(expressLayouts) // debe ir despues del motor de vistas pero antes de requerir las rutas
app.use(express.static(path.join(__dirname,"public")));

const router = require('./routes/router.js')
app.use(router.routes)
/* app.get('/',router); */
try {
    db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log(`el error en conexion es: ${error}`)
}

dotenv.config({path: './env/.env'}) 


app.listen(port,()=>{
    console.log(`server up running in http://localhost:${port}`);
})