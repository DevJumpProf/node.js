const fs = require('fs');
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

module.exports = {
    index : (req,res) => {
        res.render('main',{title : 'Concesionaria',concesionaria:concesionaria})
    }
}