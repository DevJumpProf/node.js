const fs = require ("fs");
const personajes = JSON.parse (fs.readFileSync("./data/personajes.json", "utf8"));

module.exports = {
        index: (req,res) =>{
            res.send (personajes)
        },
         detalle: (req,res) => {
           let idPersonaje = req.params.id;
        
           personajes.forEach (personajes => {
           if(idPersonaje==personajes.id) {
              res.render('personajes', {titulo: 'Personaje', nombre:`${personajes.nombre}`, informacion:`${personajes.informacion}`, img:`${personajes.img}`})
           }});
           res.send('No encontramos al personaje')
         },

         bio: (req, res) => {
          let idPersonaje = req.params.id;
          let ok = req.params.ok;
              res.set ({"content-type":"text/plain;charset=utf-8"})
  
          personajes.forEach(personajes => {
              if (idPersonaje==personajes.id) {
                  if (ok == "ok") {
                      res.write(`hola, su nombre es : ${personajes.nombre}`)
                      res.write(personajes.informacion)
                      res.end()
                  } else {
                      res.send(`${personajes.nombre} dice que lamenta que no quieras ver su detalle`)
                  }
  
              }
          });
          res.send("no encontramos al personaje")
      }
}