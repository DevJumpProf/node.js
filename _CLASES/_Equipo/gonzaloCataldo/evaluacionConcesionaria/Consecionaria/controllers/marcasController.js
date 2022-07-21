const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const concesionarias = JSON.parse (fs.readFileSync("./data/concesionarias.json")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports= {
    marcas: (req, res) => {
        let autos = []
        concesionarias.forEach(sucursal => { 
        sucursal.autos.forEach(auti => { 
            if(autos.includes(auti.marca) == false) {
                autos.push(auti.marca)}
            }); 
        });
        res.render("marcas", { titulo: "Nuestras Marcas", autos: autos})
    },
    marca: (req, res) => {
        let suich = false
        let marca = req.params.marca
        let autis = []
        concesionarias.forEach(sucursal => { 
            sucursal.autos.forEach(auti => {
                if(auti.marca == marca) {
                    autis.unshift(auti)
                    suich = true
                }
            }); 
        });
        if( suich == true) {
        res.render("marca", { titulo: `Marca ${marca}`, autis: autis, marca: marca}) 
    } else {
        res.render("error")
    }
    }
}