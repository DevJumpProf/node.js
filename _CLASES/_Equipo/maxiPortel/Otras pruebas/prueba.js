const moment = require('moment');  // Modulo de terceros. Necesita ser instalado(npm install).
const fs = require('fs'); // Modulo nativo. No es necesario instalarlo, pero se guarda en una variable también.
const series = require('./series'); //Modulo propio. Lo traemos desde otro archivo JS, desde ahí avisamos que se va a exportar.
const http = require('http');
const url = require('url');


/* ------------------------------
console.log(series); //Por consola vamos a subir el servidor por ende no queremos que muestre la constante de series.
------------------------------ */

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    // 200(primer argumento) es el código de estado, en este caso indica que todo esta funcionando correctamente
    // {"content...} (segundo argumento) es un objeto con los encabezados de respuesta

    res.write(`Su url es:${req.url}`);
    //req representa la solicitud del cliente lo trae como 'obejto'
    //url sería un atributo que contiene la url que viene después de nombre de dominio. Ejemplo : localhost:3030/urlDespuesDeDominio


    let obj = url.parse(req.url, true).query;
    //hacemos una variale para guardar el objeto y pasamos los parametros. "url.parse" Decodifica el link y devuelve en un objeto lo que es protocolo, dominio, etc. y el parametro "true" está para ver si hay algo despies de las doble barras(//) y así poder identificar que es protocolo o host, etc.
    // "query" es la propiedad del objeto que devuelve todo lo anterior: "url.parse(a,b)"
    let fecha = `${obj.year} ${obj.month}`;
    //acá armamos una variable para guardar los datos que tiene el objeto(obj) en los atributos "year" y "month" llamaremos a esta variable para imprimirlo en pantalla abajo
    
    res.end(` ${fecha}`);
}).listen(3030, 'localhost');