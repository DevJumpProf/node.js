const fs = require ("fs");
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8"));

module.exports = {

    index: (req, res) => {
        res.render('heroes' , {title:"Heroes", JSON: heroes})
    }, 
      detalle: (req, res, next) => {
        let {id} = req.params;

        heroes.forEach(heroe => {
            if(id == heroe.id){
                res.send(`Soy ${heroe.nombre} y mi profesion es ${heroe.profesion}`)
            }
        })
        res.send('No encontramos al heroe')
    }
} 

