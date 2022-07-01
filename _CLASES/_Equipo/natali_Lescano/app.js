const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envio un saludo desde el servidor con node.js");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando al servidorr...");
});