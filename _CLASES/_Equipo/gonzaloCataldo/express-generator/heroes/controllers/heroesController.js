const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const heroes = JSON.parse (fs.readFileSync("./data/heroes.json", "utf8")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports ={
    index: (req,res) =>{
        res.render ("heroes", {titulo: "Heroes", hero: heroes}) //Definios index para que envie el JSON traducido que guardamos en la variable heroes
    },
    detalle: (req,res) => {
        let idHeroe = req.params.id;
        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
                res.render("detalle", {titulo: `Detalles ${heroe.nombre}`, hero:heroes, herou: heroe})
            }
        });
        res.render("error")
    },
    bio: (req, res) => {
        let idHeroe = req.params.id;
        let ok = req.params.ok;
        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
                if (ok == "ok") {
                    res.render("bio", {titulo:`Biografia ${heroe.nombre}`, hero: heroes, herou: heroe})
                } 
            }
        }); res.render("error")
    }
}

