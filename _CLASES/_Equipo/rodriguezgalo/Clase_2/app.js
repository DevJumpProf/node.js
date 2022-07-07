const http = require("http");

const server = http.createServer((req, res) => {
    console.log("respuesta del servidor funcionando...");
    res.end("El servidor me devuelve esto");
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log("Servidor Escuchando...");
});