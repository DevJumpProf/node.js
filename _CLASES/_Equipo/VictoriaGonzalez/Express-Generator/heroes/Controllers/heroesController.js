const fs = require ("fs");
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8"));

module.exports = {

    index: (req, res) => {
        res.render('heroes' , {title:"Heroes", heroes: heroes})
    }, 
      detalle: (req, res, next) => {
        let {id} = req.params;

        heroes.forEach(heroe => {
            if(id == heroe.id){
                res.send(`Soy ${heroe.nombre} y mi profesion es ${heroe.profesion}`)
            }
        })
        res.send('No encontramos al heroe')
    },
    bio: (req, res, next) => {
        let {id, bio} = req.params;

        heroes.forEach(heroe => {
            if(bio == "bio" && id == heroe.id){
                res.send(heroe.resenia)
            }else if(bio !== "bio" && id == heroe.id){
                res.send(`${heroe.nombre} lamenta que no quieras ver su detalle`);
            }
        });
    }
}


