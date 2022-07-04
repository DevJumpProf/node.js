const express = require("express");
const app = express();  
const port = 3000;   


app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views"); 

app.get("/", (req, res) => {
  res.render("index", { titulo: "Index EJS" , h1: "h1 index en EJS"});
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" , h1: "h1 nosotros en EJS"});
});

app.use((req, res, next) => {
res.status(404).render("404", { titulo: "Página 404" , laUrl: "localhost:3000" + req.url});
});

app.listen(port, () => {
  console.log(`Ejemplo , levanto mi servidor en : http://localhost:${port}`);
});