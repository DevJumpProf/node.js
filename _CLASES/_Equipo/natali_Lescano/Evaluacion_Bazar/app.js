/* 1. Abrir el servidor de la página */

/* const http = require("http");
const puerto = 3000;

const servidor = http.createServer((req,res) => {
    console.log("respuesta del servidor andando0")
    res.end("Servidor local")
});

servidor.listen(puerto, () => {
 console.log("Escuchando al servidor")
}); */


/* 2. Empezar a armar el express,ejs, vistas y rutas */

const express = require('express');
const app = express();
/* Puerto definido */
const puerto = 3000;

/* Setear para que se vea los ejs y vistas */
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");


/* Usar el express para  */
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", { tituloindex: "SuperBazar" , h3: "🏺​ Super Bazar Shop 🧉"});
  });

  app.get("/cocina", (req, res) => {
    res.render("cocina", { titulo: "Cocina - SuperBazar" , h2: "🥘 Cocina 🍽️"});
  });

  app.get("/categorias", (req, res) => {
    res.render("categorias", { titulo: "Categorias - SuperBazar"});
    
  });

  app.use('/', require('./router/routerWeb'));

app.use((req, res, next) => {
    res.status(404).render("404", { titulo: "Error 404", h2: "⚠️Error 404⚠️" });
  }); 


app.listen(puerto, () => {
    console.log('App escuchandose desde http://localhost:${puerto}')
});