const fs = require ("fs");
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8"));

module.exports ={
    index: (req,res, next) =>{
        res.send(heroes)
    },
    personajes: (req, res, next) => {
        let {id} = req.params;

        heroes.forEach(heroe => {
            if(id == heroe.id){
                res.render('heroes', {title: `Soy ${heroe.nombre} y ocupo la profesión de ${heroe.profesion}`});
            }
        });
            res.render('heroes', {title: `No pudimos encontrar su heroe..`});               
    },
    bio: (req,res, next) => {
        let {id} = req.params;
        let {bio} = req.params;

        heroes.forEach(heroe => {
            if(id == heroe.id && bio == "ok"){
            
                res.render('heroes', {title: `Soy ${heroe.nombre} y ocupo la profesión de ${heroe.profesion}... Más infromación: ${heroe.resenia}`});
            
            }if(id == heroe.id && bio !== "ok"){
                res.render('heroes', {title: `Lamentamos que no desee conocer más acerca de ${heroe.nombre}.`});
            }
        })
            res.render('heroes', {title: `No pudimos encontrar su heroe..`}); 
    }
}