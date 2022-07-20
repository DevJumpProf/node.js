const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const concesionarias = JSON.parse (fs.readFileSync("./data/concesionarias.json")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports= {
    sucursales: (req, res) => {
        res.render("sucursales", { titulo: "Nuestras Sucursales", sucurs: concesionarias})
    },
    sucursal: (req, res) => {
        let sucursal = req.params.sucursal
        concesionarias.forEach(sucursali => {
            if(sucursali.sucursal == sucursal) {
                res.render("sucursal", {titulo:`Sucursal ${sucursali.sucursal}`, sucur: sucursali, sucurs: concesionarias})
            }
        }); res.send("error");
    }
}
console.log()