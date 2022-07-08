// TAREA 1
/* const http = require ('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log("Servidor funcionando perfectamente..");
    res.end("Bienvenido a mi servidor")
});

server.listen(port,()=>{
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
}) */

//TAREA 2
/* ----Express----------------------------------------------------- */
const express = require("express"); // Requerimos Express
const app = express();  // metodos express
const port = 3000;   // definimos el puerto

// defino el motor de vistas EJS
app.set("view engine", "ejs"); //cual va a ser mi motor de vistas
app.set("views", __dirname + "/views"); // donde van a estar esas vistas

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" , h1: "h1 index en EJS"});
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" , h1: "h1 nosotros en EJS"});
});

/* Definir la vista para el error 404 */
app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404",laUrl:req.url });/* req.url te devuelve la url que el usario escriba despues de la ruta raiz */
}); 

 app.listen(port, () => {
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
}); 

