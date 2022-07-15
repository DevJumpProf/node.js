const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const heroes = JSON.parse (fs.readFileSync("./data/heroes.json", "utf8")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports ={
    index: (req,res) =>{
        res.send (heroes) //Definios index para que envie el JSON traducido que guardamos en la variable heroes
    },
    detalle: (req,res) => {
        let idHeroe = req.params.id;
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
        res.set ({"content-type":"text/plain;charset=utf-8"})
        heroes.forEach(heroe => {
            if (heroe.id = idHeroe) {
                if (ok == "ok") {
                    res.write(`hola, mi nombre es : ${heroe.nombre}`)
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

