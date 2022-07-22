const fs = require("fs");

const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    sucursales: (req, res, next) => {
        let id = req.params.id;
        if (id = "sucursales") {
            res.render('sucursales', { title: "sucursales Arbi", concesionarias: concesionarias })
        }
    },

    sucursal: (req, res, next) => {
        let sucursal = req.params.sucursal;
        let nombresucursal
        let telefonosucursal
        let direccionsucursal
        let cantidad = 0
        let autos1 

        concesionarias.forEach(sucursal1 => {


            if (sucursal == sucursal1.sucursal) {
                nombresucursal = sucursal1.sucursal
                telefonosucursal = sucursal1.telefono
                direccionsucursal = sucursal1.direccion
                cantidad = sucursal1.autos.length
                autos1 = sucursal1.autos

                res.render('sucursal', { title: `${nombresucursal}`,  telefonosucursal, direccionsucursal, cantidad, autos1})
            }
        })

       res.send(`No existe la sucursal`); 
    }
}