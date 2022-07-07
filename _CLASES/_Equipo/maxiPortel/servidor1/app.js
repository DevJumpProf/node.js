/* const http = require('http'); //modulo nativo

const server = http.createServer((req,res) => {
    console.log('Respuesta de servidor completa.');
    res.end('Mi segundo server esta encendido');
})

const port = 3000;

server.listen(port, () => {
    console.log('Escuchando pedidos...');
}); */

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Respondiendo solicitudes');
    if(req.url == '/contacto'){
        res.write('Estas en contacto ')
    }
    res.end('Hola servidor 2');
})

server.listen(port, () => {
    console.log('Servidor on');
})