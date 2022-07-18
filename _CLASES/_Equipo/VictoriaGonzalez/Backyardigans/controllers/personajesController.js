const fs = require ("fs");
/* console.log(fs) */
const personajes = JSON.parse (fs.readFileSync("./data/personajes.json", "utf8"));

module.exports ={
    index: (req,res) =>{
        res.render ('backyardigans', {title:"personajes", personajes:personajes})
    },
    detalle: (req, res, next) => {
         let id=req.params.id 
        personajes.forEach(personaje=> { 
               if (id==personaje.id) { 
                res.render('id', {jason:personaje})
            }    
        }),
        res.render('noexiste')
    }
}
    

    
    
 
    
    
    
    
    /*
              res.send("No encontramos tu bicho")
          }
    }*/