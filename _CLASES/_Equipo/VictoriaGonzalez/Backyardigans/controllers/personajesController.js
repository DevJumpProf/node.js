const fs = require ("fs");
/* console.log(fs) */
const personajes = JSON.parse (fs.readFileSync("./data/backyardigans.json", "utf8"));

module.exports ={
    index: (req,res) =>{
        res.send (personajes)
    },

    
    nombres: (req, res) => {
        let nombrePersonaje = req.params.personajes; 
           /*    let { idHeroe } = req.params */
      
              backyardigans.forEach(personaje => {
                  if (nombrePersonaje == personaje.nombre) {
                      res.send(`hola soy  ${backyardigans.nombre}`)
                  }
              });
              res.send("No encontramos tu bicho")
          },
    }