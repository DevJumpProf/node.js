const express = require("express"); //requiere express
const app = express(); //llama a todos los metodos de express
const port = 3030; 

app.use(express.static ("/public"));// no funciona 

app.use('/', require('./router/RutasWeb'));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


  app.use((req, res, next) => {
    res.status(404).render("error", { h1: "Error 404", h2:"no se encontro la página" }); //
  }); // middleware


app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});
