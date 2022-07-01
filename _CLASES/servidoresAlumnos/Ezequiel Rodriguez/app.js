const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Respuesta del servidor..");
    res.end("Bienvenido a nuestro server")
});

const port = 3000;

server.listen(port, () => {
    console.log("Funcionando correctamente..");
});