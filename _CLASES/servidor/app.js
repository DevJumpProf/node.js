/* ----Express----------------------------------------------------- */
const express = require("express"); // Requerimos Express
const app = express();  // metodos express
const port = 3000;   // definimos el puerto
const home = require('./router/RutasWeb')
const cursos = require('./router/cursos')

// defino el motor de vistas EJS
app.set("view engine", "ejs"); //cual va a ser mi motor de vistas
app.set("views", __dirname + "/views"); // donde van a estar esas vistas

//Rutas web  (Antes de la configuracion del error 404)
app.use('/',home);
app.use('/cursos',cursos);


/* Definir la vista para el error 404 */
 app.use((req, res, next) => {
  res.status(404).render("404", { titulo404: "Página 404" });
}); 
  
// defino el puerto y el mensaje cuando levante el servidor
app.listen(port, () => {
  console.log(`Ejemplo , levanto mi servidor en : http://localhost:${port}`);
});

