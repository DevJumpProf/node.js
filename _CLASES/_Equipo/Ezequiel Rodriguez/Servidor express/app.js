const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs")
app.set("views",__dirname + "/views")

/* definiendo index y web /nosotros*/
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/nosotros", (req, res) => {
    res.sendFile(__dirname + "/public/nosotros.html");
});

/* Definiendo accion al encontrar Error 404 */
app.use((req, res, next) => {
  res.status(404).render("404",{titulo: "Error 404, vuelva a intentarlo más tarde.."});
});

app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});