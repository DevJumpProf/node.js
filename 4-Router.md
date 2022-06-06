<img  src='logo.png' height='70px'>

# Lección 4: Router

* Rutas
* Notas importantes
* Mascotas Router

Router
Vamos a establecer un orden con el middleware Router de Express.

## Rutas
https://expressjs.com/es/guide/routing.html
Utilice el middleware express.Router para crear manejadores de rutas montables y modulares.
Creamos una carpeta router
// RutasWeb.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico de servicios"})
})

module.exports = router;

// app.js
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/RutasWeb'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})

## Notas importantes
Puedes utilizar:
app.use('/api', require('./router/RutasWeb'));
Pero tendremos que cambiar las rutas en las vistas (sacar el punto):
<link rel="stylesheet" href="/css/bootstrap.min.css">

<script src="/js/bootstrap.min.js"></script>
Por ahora eso es todo con las rutas, pero seguiremos configurando en el apartado de Bases de datos.

## Mascotas Router
// Mascotas.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {listaMascotas: "Aquí irán todas las mascotas"})
})

module.exports = router;
//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));
<%- include("template/cabecera", {tituloWeb: 'Mascotas'}) %>

    <h1><%= listaMascotas %></h1>
    
<%- include("template/footer") %>

