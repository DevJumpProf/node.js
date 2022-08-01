const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const port = 3000;
const app = express ()

// Seteamos el motor de plantillas
app.set("view engine", "ejs");

//Seteamos la carpeta public para los archivos estaticos
app.use(express.static("public"))

// Para procesar datos enviados desde forms
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Setear las variables de entorno
dotenv.config({path: "./env/.env"})

// Llamar al router
app.use("/", require("./routes/router.js"));

/* app.get("/", (req,res) => {
    res.render("index")
}) */

app.listen(port,() => {
    console.log("Servidor corriendo en http://localhost:3000");
})

