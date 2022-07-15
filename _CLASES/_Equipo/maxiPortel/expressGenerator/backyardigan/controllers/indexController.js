const fs = require('fs');


module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: 'Backyardigan' });
    }
}