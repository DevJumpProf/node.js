const express = require('express');
const app = express();
const port = 3030;
/* ARCHIVOS CARPETA PUBLIC */
app.use(express.static(__dirname + "/public"));

/* MOTOR DE VISTA */
app.set('view engine','ejs');
app.set("views",__dirname + "/views");

/* ROUTER */
app.use("/",require('./router/rutasWeb'));

app.use((req,res,next) => {
    res.status(404).render("404",{titulo: "Error 404, page not found"});
});

app.listen(port, () => {
    console.log(`Funcionando correctamente el Host: ${port}`);
});