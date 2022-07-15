const fs = require('fs'); /* requerimos modulo file system */

const personajes = JSON.parse(fs.readFileSync('./data/personajes.json', 'utf-8')); /* parseamos el archivo json para usarlo en forma de objeto */





module.exports = {
  main : (req,res) => {
    res.send(personajes)
  },
  show : (req,res) => {
    let idPersonaje = req.params.id
    let allow = true /* si se envia variables como comprobacion como en este caso, se debera ver que este dentro del scope indicado para evitar futuros errores */
 personajes.forEach(personaje => { /* hay que recorrer el objeto de personajes para que devuelva el que matchee con el pasado por req.params */
    if(idPersonaje == personaje.id) {
        res.render('personaje', {nombre : `${personaje.nombre}`, bio: `${personaje.bio}`})
    }
 })

 res.render('personaje', {nombre: 'inexistente', bio: 'Este personaje no existe busca uno que si exista(?',allow}) /* enviamos la  */
  }

}