const express = require("express"); // llamamos al modulo express para usarlo
const app = express(); //llamamos al metodo express en una variable, a partir de ahora vamos a usar la variable
const port = 3000; // configuramos el puerto, en este caso es estatico

app.set('view engine', 'ejs'); // declaramos que vamos a usar vistas y que son .ejs
app.set('views', __dirname + '/views'); //decimos que esas vistas estan en una ruta(__dirname) dinamica y estan en la carpeta /views

app.use(express.static(__dirname + '/public'));

//llamamos el archivo creado de rutas
app.use('/', require(__dirname + '/router/rutasWeb'));

app.use( (req, res, next) => {
    res.status(404).render('404', {titulo404: 'Error404'});
});

app.listen(port, () => {
    console.log(`Servidor OK http://localhost:${port}`);
});




/* // -------------- SIN EJS
//Llamamos la variable app(que contiene el metodo express) y utilizamos el metodo 'get' para poder llevar información al usuario. 
app.get("/", (req, res) => { // "/" hace alusión al home. Hace referencia a la "/" que aparece despues del dominio EJ: http://www.dominio.com/

  res.send("Hola Mundo!"); // Ahora utilizaremos 'send' en las respuestas
});

//Acá siguien los pasos anteriores vamos a crear la pagina /contactos

app.get('/contacto', (req, res) => {
    res.send(__dirname);
});

app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Servidor OK http://localhost:${port}`);
});

//--------SIN EJS */