const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes/router.js");
const db = require('./database/db.js');
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(router);

try {
    db.authenticate();
    console.log(`Servidor CONECTADO =D`);
} catch (error) {
    console.log(`${error} No pudimos conectar`);
}

app.use(express.static(path.join(__dirname, "public")));

app.listen(port,()=>{
    console.log (`Server up running in http://localhost:${port}`)
});