const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const db = require("./database/db.js");
const cookieParser = require('cookie-parser');
const method = require("method-override")
const dotenv = require('dotenv') 
//Declare port
const port = 3000;
//Declare view engine as "ejs"
app.set('view engine', 'ejs');
//Use express Layouts
app.use(expressLayouts);
//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))
//to process data from forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(method("_method"))
//seteamos las variables de entorno
 dotenv.config({path: './env/.env'})
//to work with cookies
app.use(cookieParser())
//Require router
const router = require('./routes/router.js');
//Use router
app.use(router.routes);
// Declarate "public" as static folder
app.use(express.static(path.join(__dirname, 'public')));
//The port listening here
app.listen(port, () => { console.log(`Server up running in http://localhost:${port}`) });
//We use a try.catch promise to leave our db connected, dont forget to require it
try {// authenticate our db
    db.authenticate()
    // leave a message on the console about our connection status
    console.log('Successful connection to db')
    // if we db isn't connected our catch will show the error this way
} catch (error) {
    // the message to see the error in the console
    console.log(`The error connection is: ${error}`)
};



