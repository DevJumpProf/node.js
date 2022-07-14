const fs = require('fs'); /* requerimos el modulo file system par poder leer archivos y poder editarlos o usarlos */

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));
 /* duragamos al json como un objeto en especifico la lectura de la misam, con el dirname indicamos la direccion del archico json */



module.exports = {
    index : (req,res,next) => {
        res.send(heroes)
    }
}