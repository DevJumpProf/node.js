const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const personajes = JSON.parse (fs.readFileSync("./data/backyardigans.json")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports= {
    mostrar: (req, res) => {
        res.render("personajes", {titulo: "Personajes Backyardigans", tituloprincipal: "asd"})
    },
    detalles: (req, res) => {
        let idPersonaje = req.params.id;
        personajes.forEach(personajes => {
            if(idPersonaje == personajes.id) {
                res.render("detalles")
            } else {
                res.send("error 404")
            }
        })
    },
    biografia: (req, res) => {
        let idPersonaje = req.params.id;
        let bio = req.params.bio;
        personajes.forEach(personajes => {
            if(idPersonaje == personajes.id) {
                if(bio == "bio") {
                    res.render("bio")
                } else {
                    res.send("error 404")
                }
            }
        })
    }
}