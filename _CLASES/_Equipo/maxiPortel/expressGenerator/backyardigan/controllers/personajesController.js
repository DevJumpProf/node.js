const fs = require('fs');
const personajesJson = fs.readFileSync('./data/personajes.json', 'utf-8');
const personajes = JSON.parse(personajesJson);

module.exports = {
    index: (req, res, next) => {
        res.send(personajes)
    },
    id: (req, res, next) => {
        let {id} = req.params;
        
        personajes.forEach(pj => {
            if(id == pj.id){
                res.render("idPersonajes", {title: 'Personsajes', personaje: pj})
            }
        })
        res.send('No encontramos al heroe')
    }
}