const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    index: (req, res, next) => {
        concesionarias.forEach(sucursales => {
            res.render('./sucursales/sucursales', {title: "Sucursales", concesionarios: concesionarias})
        });
    },
    show: (req, res, next) => {
        let {id} = req.params
        let autoArray = [];
        
        concesionarias.forEach(sucursales => {
            if(id == sucursales.sucursal){
            sucursales.autos.forEach(autos=> {
                autoArray.push(autos);
            });
                res.render('./sucursales/sucursal-sucursales', {title: sucursales.sucursal, sucursales: sucursales, auto:autoArray})
        }
    });
        res.render('error');
    }
}