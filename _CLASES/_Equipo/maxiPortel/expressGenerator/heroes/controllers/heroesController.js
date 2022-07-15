const fs = require('fs'); // requerimos FS
const heroesJson = fs.readFileSync('./data/heroes.json', 'utf-8')  //de FS usamos el metodo 'readFileSync' para poder leer el json, pero no está traducido para JS y usamos utf-8 para tome los acentos y simbolos, y poder leer todos los caracteres 
const heroes = JSON.parse(heroesJson); //json.parse nos traduce la lectura de 'fs.readFileSync' a JavaScript y le pasamos el parametro de la constante que leyó el json.

/*
const heroes = JSON.parse('./data/heroes.json', 'utf-8'); //Otra manera de estructurarlo
*/

module.exports = {
    index: (req, res, next) => {
        res.render('heroes', {titulo: 'Heroes'}) //enviamos el parametro de la lectura+la traduccion del archivo 'heroes.json'. En el navegador usamos una extensión de chrome para verlo mejor 'json.viewer'.
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