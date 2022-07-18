const fs = require('fs');
const personajes = JSON.parse(fs.readFileSync('./data/personajes.json', 'utf-8'));

module.exports = {
    index : (req,res) => {
        res.render('main', {personajes : personajes})
    }
}