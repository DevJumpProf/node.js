const express = require("express");
const app = express();
const port = 3000;


/* MOTOR DE PLANTILLAS */
app.set("view engine","ejs")
app.set("views",__dirname + "/views")
app.use(express.static(__dirname + "/public"));

/* Router */
app.use('/',require('./router/rutasWeb'));

app.use((req, res, next) => {
  res.status(404).render("404",{titulo: "Error 404, vuelva a intentarlo más tarde.."});
});


app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});
