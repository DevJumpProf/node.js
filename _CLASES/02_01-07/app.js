

const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {"content-Type": "text/plain"});
  if (req.url == "/"){
    res.end ("Estas en el Home")
  }
  if (req.url == "/conocenos"){
    res.end("paginas conocenos")
  } else {
    res.writeHead(404, {"content-Type": "text/plain"});
    res.end ("error 404")
  }

}).listen(3030, 'localhost');   