const http = require("http"); // requiero http

// guardo el servidor en una variable
const server = http.createServer((req, res) => {
  console.log("respuesta del servidor funcionando...");
  res.end("El servidor me devuelve esto");
});

const puerto = 3000; // guardo el puerto en una variables

server.listen(puerto, () => {
  console.log("Servidor Escuchando...");
});