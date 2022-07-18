const fs = require('fs');
const personajes = JSON.parse(fs.readFileSync('./data/personajes.json', 'utf-8')); /* convertimos en objeto el json */


module.exports = {
    detail : (req,res) =>{
        let idPersonaje = req.params.id; /* guaradamos en un avariable el id pasado por el url */
        personajes.forEach(personaje => { /* repasamos todo el json ahora convertido en objeto */
            if(idPersonaje == personaje.id){ /* hacemos la comparacion entre el id guardado pasado por url y el id de cada uno de los personajes declarados en el json, con lo que al compararse si se encuentra una coincidencia entre ellas se ejecuta lo declarado a continuacion */
                res.render('personaje',{personaje:personaje})
            }
        })
        res.send('no encontramos tu personaje intenta nuevamente!') /* sino se encuentra coincidencia se declara un mensaje de error! */
    }
}