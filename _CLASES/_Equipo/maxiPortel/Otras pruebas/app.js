const http = require('http'); //modulo nativo

const server = http.createServer((req,res) => {
    console.log('Respuesta de servidor completa.');;
    res.end('Mi segundo server esta encendido');
})

const port = 3000;

server.listen(port, () => {
    console.log('Escuchando pedidos...')
})