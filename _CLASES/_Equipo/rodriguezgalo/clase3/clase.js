/* const express = require ("express");
const app = express();
const puerto = 3003
app.use(express.static(__dirname+"/public"))


app.get ("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.get ("/contactos",(req,res)=>{
    res.sendFile(__dirname+"/public/contactos.html");
})

app.listen (puerto,()=>{
    console.log("servidor escuchando...")
}) */

const express = require ("express");
const app = express();
const puerto = 3003;
app.use(express.static(__dirname+"/public"))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.get("/",(req,res)=>{
    res.render("index",{titulo: "index"});
})

app.get("/nosotros",(req,res)=>{
    res.render("nosotros",{titulo: "welcome to the jungle"});
})

app.use((req,res,next)=>{
    res.status(404).render("error",{titulo: "error"})
})

app.listen (puerto,()=>{
    console.log("servidor escuchando...")
})
//-----------------------------------------------------------------------------
/* const express = require ("express");
const app = express();
const puerto = 3003;

app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");
app.set("views",__dirname+"/views");

app.get("/",(req,res)=>{
    res.render("index",{titulo: "index"});
});

app.get("/nosotros",(req,res)=>{
    res.render("nosotros",{titulo: "nosotros"});
});

app.use((req,res,next)=>{
    res.status(404).render("error",{titulo: "error"});
});

app.listen(puerto,()=>{
    console.log("servidor escuchando...");
}); */