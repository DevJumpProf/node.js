/* const http = require('http');
const server = http.createServer((req, res) =>{   //req = require / res = response
    res.end('Estoy respondiendo v.4');
})

const puerto = 3000;
server.listen(puerto, () => {
    console.log('escuchando solicitudes');
}); */


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


//motor de plantillas
app.set('view engine', 'ejs'); // declaramos que vamos a usar vistas y que son .ejs
app.set('views', __dirname + '/views'); 
//decimos que esas vistas estan en una ruta(__dirname) dinamica y estan en la carpeta /views


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //console.log(__dirname);
    res.render('index', {titulo: 'Inicio'});
});

app.get('/servicios', (req,res) =>{
    res.render('servicios', {tituloServicios: 'Servicios'});
});

app.get('/contacto', (req,res) => {
    res.render('contacto', {tituloContacto: 'Mensaje de contacto'});
});


app.use( (req,res,next) => {
    res.status(404).render('404', {titulo404: '404',
    descripcion: 'Error'})
})

app.listen(port, () => {
    console.log('servidor a  su servicio en el puerto', port);
});