const fs = require("fs");
/* console.log(fs) */
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8"));

module.exports = {
    index: (req, res) => {
        res.send(heroes)
    },
    detalle: (req, res) => {
        let idHeroe = req.params.id;
        /*    let { idHeroe } = req.params */

        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
                res.send(`hola soy heroe ${heroe.nombre} y mi profesion es ${heroe.profesion}`)
            }
        });
        res.send("no encontramos tu heroe")
    },
    bio: (req, res) => {
        let idHeroe = req.params.id;
        let ok = req.params.ok;
        res.set({ "content-type": "text/plain;charset=utf-8" })
        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
                if (ok == "ok") {
                    res.write(`hola, mi nombre es : ${heroe.nombre}`)
                    res.write(heroe.resenia)
                    res.end()
                } else {
                    res.send(`${heroe.nombre} dice que lamenta que no quieras ver su bio`)
                }
            }
        });
        
    }
}

