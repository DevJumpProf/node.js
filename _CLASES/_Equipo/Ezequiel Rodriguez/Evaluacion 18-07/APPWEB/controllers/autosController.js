const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    index: (req, res) => {
        let autoArray = [];
        
        concesionarias.forEach(element => {
            element.autos.forEach(autos=> {
                autoArray.push(autos);
            });
        })
            res.render('autos', {title: "Autos", auto: autoArray})
    },
    show: (req, res) => {
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
    }}
