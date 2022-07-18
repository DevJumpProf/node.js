const fs = require('fs');
const { title } = require('process');
const personajes = JSON.parse(fs.readFileSync('./data/personajes.json', "utf-8"));

module.exports = {
    index: (req,res,next) => {
        res.send(personajes)
    },
    show: (req, res, next) => {
        let {id} = req.params;
        
    personajes.forEach(personaje => { 
        if(id == personaje.id){
            res.render('personajes', {title: `Hola! Soy ${personaje.nombre} y soy un ${personaje.animal}..`})
        }
    });
        res.render('personajes', {title: `Hola! No encontramos su personaje, lo sentimos :(`})
    
    },
    bio: (req, res, next) => {
        let {id} = req.params;
        let {bio} = req.params;

    personajes.forEach(personaje => { 
        if(bio == "bio" && id == personaje.id){
            res.render('personajes', {title: `Hola! Soy ${personaje.nombre} y soy un ${personaje.animal}.. Más acerca de mí: ${personaje.informacion}.`})        
        }
            if(bio !== "bio" && id == personaje.id){
                res.render('personajes', {title: `Nada mas para informar sobre ${personaje.nombre}.`})
        }
    })
    }
};