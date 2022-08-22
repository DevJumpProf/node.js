const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const db = require("./database/db.js")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require("express-session")
const methodOverride = require('method-override');

//authenticate the database
try {
    db.authenticate()
    console.log("Succesful connection to database")
} catch (error) {
    console.log(`Error on connection to database: ${error}`)
}

const app = express()
const port = 3000

dotenv.config({path: "./env/.env"})

app.set("view engine", "ejs")

app.use(express.static('public'))


app.use(expressLayouts)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session( {secret: "Nuestro mensaje secreto",resave: true, saveUninitialized: true}));
app.use(methodOverride('_method'));
app.use(cookieParser())

//set layouts to false on register route
app.set("layout register", false);
app.set("layout login", false);


const router = require("./routes/router.js")

app.use(router.routes)

//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.listen(port,()=>{
    console.log(`Server running in http://localhost:${port}`)
})