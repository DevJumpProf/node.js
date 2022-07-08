// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('respuesta del servidor funcionando...');
//     res.end('El servidor esta respondiendo');
// });

// const puerto = 3030;

// server.listen(puerto, ()=> {
//     console.log("Servidor Escuchando...");
// })

const express = require("express"); 
const app = express();
const port = 3030; 



app.use('/', require('./router/RutasWeb'));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


  app.use((req, res, next) => {
    res.status(404).render("404", { h1: "Error 404", h2:"no se encontro la página" });
  });


app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});
