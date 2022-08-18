
const express = require ("express");
const path = require ("path");
const expressLayouts= require ("express-ejs-layouts")

const app = express()

const port = 3000

app.set("view engine", "ejs")

//tulizamos el router

const router = require ("./routes/router.js");
app.use(router.routes)


app.use(expressLayouts)

app.use(express.static(path.join(__dirname, "public")))
/* 
app.get("/",(req,res)=>{
    res.send("dashboard con Node Js")
})
 */
app.listen(port,()=>{
    console.log (`Server up running in http://localhost:${port}`)
})