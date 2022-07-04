
/* const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('respuesta del servidor funcionando...');
    res.end('El servidor esta respondiendo');
});

const puerto = 3030;

server.listen(puerto, ()=> {
    console.log("Servidor Escuchando...");
}) */


// levantando el servidor con EXPRESS

const express = require("express"); // se requiere express
const app = express(); // se llama al metodo de express 
const port = 3030; // declaramos el puerto

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });
  
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
  });
  
  app.use((req, res, next) => {
    res.status(404).render("404", { titulo: "Página 404" });
  });


//app.get("/", (req, res) => {
//  res.send("Hola Mundo!");
//});
//app.get("/contacto", (req, res) => {
//    res.send("index.html");
    /* res.send(__dirname); */ // te muestra en donde se encuentra la carpeta public
//  });

//  app.use((req, res, next) => { // este es un MIDDLEWARE
    // res.status(404).send("Sorry cant find that!");
 //   res.status(404).sendFile(__dirname + "/public/404.html");
 // });

app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});
