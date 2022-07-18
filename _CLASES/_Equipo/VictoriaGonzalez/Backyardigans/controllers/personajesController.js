const fs = require ("fs");
/* console.log(fs) */
const personajes = JSON.parse (fs.readFileSync("./data/personajes.json", "utf8"));

module.exports ={
    index: (req,res) =>{
        res.render ('backyardigans', {title:"personajes", personajes:personajes})
    },
    detalle: (req, res, next) => {
        let {id} = req.params;

       personajes.forEach(personaje => {
            if (id == personaje.id) {
                res.send(`Hola soy ${personaje.nombre} Mi voz es de:${personaje.voz}. Soy de color: ${personaje.color} y soy: ${personaje.tipo_de_bicho}. ${personaje.Informacion}`)
            }
        });
        res.render('noexiste')
    }
}
    
    
 
    
    
    
    
    /*
              res.send("No encontramos tu bicho")
          }
    }*/