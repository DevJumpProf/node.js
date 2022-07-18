const fs = require ("fs");
/* console.log(fs) */
const heroes = JSON.parse (fs.readFileSync("./data/heroes.json", "utf8"));

module.exports = {
    index: (req, res) => {
        res.send(heroes)
    },
    detalle: (req, res) => {
  let idHeroe = req.params.id; 

        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
                res.render('tiposheroes',{titulo:'Heroes', nombre: `${heroe.nombre}`, bio: `${heroe.resenia}`})
            }
        });
        res.send("no encontramos tu heroe")
    },
    bio: (req, res) => {
        let idHeroe = req.params.id;
        let ok = req.params.ok;
res.set ({"content-type":"text/plain;charset=utf-8"})

        heroes.forEach(heroe => {
            if (heroe.id == idHeroe) {
                if (ok == "ok") {
                    res.write(`hola, su nombre soy : ${heroe.nombre}`)
                    res.write(heroe.resenia)
                    res.end()
                } else {
                    res.send(`${heroe.nombre} dice que lamenta que no quieras ver su bio`)
                }

            }
        });
        res.send("no encontramos tu heroe")
    }
}