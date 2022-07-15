const fs = require ("fs");

const personajes = JSON.parse (fs.readFileSync("./data/personajes.json", "utf8"));

module.exports ={
  main: (req,res)=> {
      res.send(personajes)
  },

  show:(req, res)=>{
      let idPersonaje= req.params.id
      personajes.forEach(personaje => {
          if(idPersonaje== personaje.id) (
              res.render('personaje', {nombre: `${personaje.nombre}`, color:`${personaje.color}` })
            }
              else{
                  res.send('no existe el personaje')
              }
            })
}
}
                  
              
        
   
    
}