const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    detail : (req,res) =>{
        let idHeroe = req.params.id;
        let allow = true; /* mini validacion para que me tome otra informacion en el caso de que no hubiese id compatible al req.params */

        heroes.forEach(heroe => {
            if(idHeroe == heroe.id){
                res.render('heroe', {img: `${heroe.img}`,nombre: `${heroe.nombre}`,profesion: `${heroe.profesion}`, bio: `${heroe.resenia}` }) /* otra forma diferente de enviar la informacion para que se muestre en el ejs, en los backyardigans enviaba el objeto y aclaraba que parte de ella queria que me muestre en el ejs, aca envio ya la informacion desde el controlador */
            }
        })
        res.render('heroe', {img: 'images/uniqua3.jpg',nombre: 'No existe tu heroe',profesion: 'por favor intenta nuevamente', bio: `._.` , allow}) /* envio variable allow para que me lo valide */
    }
}