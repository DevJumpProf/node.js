const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

module.exports = {
    index: (req, res, next) => {
        res.render('sucursales',
            { title: 'Concesionarias', concesionarias: concesionarias });
    },
    sucursal: (req, res, next) => {
        let { sucursal } = req.params
        let autos = [];
        let check = false;
        concesionarias.forEach(element => {
            element.autos.forEach(datosAuto => {
                if (element.sucursal == sucursal) {
                    autos.push(datosAuto);
                    check = true; //check nos sirve para checkear que ya pusheo todo. Así al momento de cambiar a 'true' renderizamos abajo
                }
            }) //este forEach hace el recorrido del json para pushear los datos en un array que va a ser renderizado mas adelante
        });
        if (check == true) {
            res.render('sucursal',
                { title: sucursal, concesionarias: concesionarias, auto: autos });
        } else {
            res.render('notFound', { title: 'Error' })
        }
    }
}