const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const personajes = JSON.parse (fs.readFileSync("./data/backyardigans.json")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports= {
    mostrar: (req, res) => {
        res.render("personajes", { titulo: "Personajes Backyardigans", perso: personajes})
    },
    detalles: (req, res) => {
        let asd = req.params.id
        personajes.forEach(person => {
            if(person.id == asd) {
                res.render("detalles", { titulo: `Detalles de ${person.nombre}`, perso: person})
            }
        }); res.send("error");
    },
    biografia: (req, res) => {
        let idPersonaje = req.params.id;
        let bio = req.params.bio;
        personajes.forEach(personi => {
            if(personi.id == idPersonaje) {
                if(bio == "bio") {
                    res.render("bio", { titulo: `Biografia de ${personi.nombre}`, perso: personi})
                }
            }
        }); res.send("error");
    }
}
