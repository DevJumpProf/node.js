const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        let autosArray = [];

        concesionarias.forEach(element => {
            element.autos.forEach(elemento => {
                if (autosArray.includes(elemento.marca) == false) {
                    autosArray.push(elemento.marca);
                }
            })
        });
        res.render('./marcas/marcas', { title: "Marcas", auto: autosArray });
    },
    lista: (req, res) => {
        let { id } = req.params
        let autosArray = [];

        concesionarias.forEach(element => {
            element.autos.forEach(elemento => {
                if(elemento.marca == id){
                    autosArray.push(elemento);
            }
        })
    })
        res.render('./marcas/autos-marcas', { title: id, auto: autosArray});            
    }
}
