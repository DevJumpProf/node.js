const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', { titulo : 'Bienvenido al inicio'});
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros', { titulo : 'Bienvenido a la sección nosotros'});
});

module.exports = router;