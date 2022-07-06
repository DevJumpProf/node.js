/* const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envio un saludo desde el servidor con node.js");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando al servidorr...");
}); */


/* ------------ Express -------------- */

/* const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.get("/contacto", (req, res) => {
  res.send("ruta de contacto");
});

app.use(express.static(__dirname + "/public"));
__dirmane es la ruta según la máquina donde se ejecuta el código:
app.get("/contacto", (req, res) => {
  res.send(__dirname);
});

app.listen(port, () => {
  console.log(`Escuchando el servidor en http://localhost:${port}`);
}); */


/* --------- EJS ----------- */

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

/* Rutas  */

app.use('/', require('./router/rutasWeb'));

/* Definir la vista para el error 404 */
 app.use("/404", (req, res, next) => {
  res.status(404).render("404", {titulo: "Error 404", h2: "Redirigiendo a la página" });
}); 

app.listen(port, () => {
  console.log(`Ejemplo , levanto mi servidor en : http://localhost:${port}`);
});



