const fs = require("fs");
/* console.log(fs) */
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8"));

module.exports = {
    index: (req, res) => {
        res.render('heroes',{
            titulo:'Nuestros Heroes',
            heroes:heroes
        })
        /* res.send(heroes) */
    },
    detalle: (req, res) => {

  let idHeroe = req.params.id; 
     /*    let { idHeroe } = req.params */

        heroes.forEach(heroe => {
            if (idHeroe == heroe.id) {
               /*  res.send(`hola soy heroe ${heroe.nombre} y mi profesion es ${heroe.profesion}`) */
               res.render('detalleHeroe',{
                titulo:`Detalle heroe ${heroe.id}`,
                heroe:heroe
               })
            }
        });
        res.render('404',{
            titulo:"ERROR",
            message:`Error, no encontramos al heroe num ${req.params.id}`
        })
        /* res.send("no encontramos tu heroe") */
    },
    bio: (req, res) => {
        let idHeroe = req.params.id;
        let ok = req.params.ok;
/* res.set ({"content-type":"text/plain;charset=utf-8"}) */

        heroes.forEach(heroe => {
            if (heroe.id == idHeroe) {
                if (ok == "ok" || ok == "no") {
                    res.render('bioHeroe',{
                        titulo: `Bio del Heroe ${heroe.nombre}`,
                        heroe:heroe,
                        estado:ok
                    })
                   /*  res.write(`hola, mi nombre es : ${heroe.nombre}`)
                    res.write(heroe.resenia)
                    res.end() */
                }
                res.render('404',{
                    titulo:"ERROR",
                    message:`Error la ruta ${req.url} no existe`
                })
                    /* res.send(`${heroe.nombre} dice que lamenta que no quieras ver su bio`) */
                

            }
        });
        res.render('404',{
            titulo:"ERROR",
            message:`Error, no encontramos al heroe num ${req.params.id}`
        })
       /*  res.send("no encontramos tu heroe") */
    }
}

