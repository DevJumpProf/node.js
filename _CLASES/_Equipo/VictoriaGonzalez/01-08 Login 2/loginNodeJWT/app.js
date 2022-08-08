const express = require ("express")
const dotenv = require ("dotenv")
const cookieParser = require ("cookie-parser")

const app = express ()

// seteamos el motor de plantillas
app.set("view engine", "ejs");

// seteamos la carpeta public para los archivoss estaticos
app.use(express.static("public"))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//setear las variables de entorno
dotenv.config({path:"./env/.env"})


//llamar al router
app.use("/", require("./routes/router"))


/* app.get ("/",(req,res)=>{
    res.render("index")
}) */

app.listen (3000,()=>{
    console.log("Servidor Corriendo en http:/localhost:3000")
})

