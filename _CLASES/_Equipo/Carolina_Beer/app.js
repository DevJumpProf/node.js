const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('respuesta del servidor funcionando...');
    res.end('El servidor esta respondiendo');
});

const puerto = 3030;

server.listen(puerto, ()=> {
    console.log("Servidor Escuchando...");
})