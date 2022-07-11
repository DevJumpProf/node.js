const express = require('express'); // requerimos express
const app = express(); // llamamos los metodos de express en la variable "app"

const port = process.env.PORT || 3030; // declaramos el puerto

// definimos el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* app.use(express.static(__dirname + "./public")); */ // definimos como public a la carpeta con archivos estaticos y usamos el dirname para que retorne la direccion indicada
app.use(express.static("public")); // segundo intento con el public

// indicamos desde donde debe ver las Rutas web
app.use('/', require('./route/RutasWeb'));

// definimos un middleware con la respuesta que se deba dar en caso de un error 404
app.use((req, res, next) => {
    res.status(404).render("error", {
        titulo: "ERROR 404",
        descripcion: `La pagina buscada: http://localhost:${port}${req.url} no existe` // muestra la direccion url ingresada que no se encuentra
    })
})

//levantamos el servidor y definimos un mensaje para la terminal
app.listen(port, () => {
    console.log(`servidor levantado http://localhost:${port}`);
  });