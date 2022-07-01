const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end("Mi primer server");
}).listen(3030, 'localhost');