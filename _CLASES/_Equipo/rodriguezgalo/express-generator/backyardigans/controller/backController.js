const fs = require("fs");

const personajes = JSON.parse(fs.readFileSync("./data/backyardigans.json"));

module.exports = {
    index: (req, res) => {
        res.render("personajes",{titulo: "Personajes", json: personajes})
    },
    tipo: (req, res) => {
        let idBack = req.params.id;
        personajes.forEach(personaje => {
            if (idBack == personaje.id) {
                res.send(`hola soy ${personaje.nombre} y mi tipo es ${personaje.tipo}`)
            }
        })
        res.send("este personaje no existe")
    },
    bio: (req, res) => {
/*         let idBack = req.params.id;
        let bio = req.params.bio; */
        let {id,bio} = req.params;
        res.set({ "content-type": "text/plain;charset=utf-8" })
        personajes.forEach(personaje => {
            if (id == personaje.id) {
                if (bio == "bio") {
                    res.write(`biografia de ${personaje.nombre}:`)
                    res.write(personaje.informacion)
                    res.end()
                } else {
                    res.send(`${personaje.nombre}: ¿No quieres ver esta información?`)
                }
            }
        });
    }
}