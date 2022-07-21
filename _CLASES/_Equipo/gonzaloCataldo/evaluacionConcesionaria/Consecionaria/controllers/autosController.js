const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema

const concesionarias = JSON.parse (fs.readFileSync("./data/concesionarias.json")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.


module.exports= {
    autos: (req, res) => {
        let suich = false
        let autis = []
        concesionarias.forEach(sucursal => { 
            sucursal.autos.forEach(auti => {
                autis.unshift(auti)
                suich = true
            }); 
        });
        if( suich == true) {
        res.render("autos", { titulo: `Nuestros autos`, autis: autis}) 
        } else {
            res.render("error")
        }
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
        res.render("autosmarca", { titulo: `Autos ${marca}`, autis: autis, marca: marca}) 
    } else {
        res.render("error")
    }
    },
    anio: (req, res) => {
        let suich = false
        let marca = req.params.marca
        let anio = req.params.anio
        let autis = []
        concesionarias.forEach(sucursal => { 
            sucursal.autos.forEach(auti => {
                if(auti.marca == marca && auti.anio == anio) {
                autis.unshift(auti)
                suich = true
            }
            }); 
        });
        if( suich == true) {
        res.render("autosanio", { titulo: `Autos ${marca} ${anio}`, autis: autis, marca: marca, anio: anio}) 
    } else {
        res.render("error")
}
    },
    color: (req, res) => {
            let suich = false
            let marca = req.params.marca
            let anio = req.params.anio
            let color = req.params.color
            let autis = []
            concesionarias.forEach(sucursal => { 
                sucursal.autos.forEach(auti => {
                    if(auti.marca == marca && auti.anio == anio && auti.color == color) {
                    autis.unshift(auti)
                    suich = true
                }
                }); 
            });
            if( suich == true) {
                res.render("autoscolor", { titulo: `Autos ${marca} ${anio} ${color}`, autis: autis, marca: marca, anio: anio, color: color})
            } else {
            res.render("error")
            }
        }
    }