/* ----Express----------------------------------------------------- */
const express = require("express"); // Requerimos Express
const app = express();  // metodos express
const port = 3000;   // definimos el puerto

// defino el motor de vistas EJS
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views"); 
app.use(express.static(__dirname + "/public"));

//llamar archivo rutas
app.use('/', require('./router/RutasWeb'));

app.use((req, res, next) => {
  res.status(404).render("404",{titulo: "Error 404, intente más tarde.."});
});


app.listen(port, () => {
  console.log(`Servidor funcionando http://localhost:${port}`);
});