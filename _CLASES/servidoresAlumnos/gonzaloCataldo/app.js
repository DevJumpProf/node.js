const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Respuesta del server funcionando..");
    res.end("El servidor devuelve esto hola hola hola hola");
});

const puerto = 3000


server.listen(puerto, () => {
    console.log("Server escuchando asdasdasd");
})