const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    index : (req,res) => {
        res.render('main', {heroes})
    }
};