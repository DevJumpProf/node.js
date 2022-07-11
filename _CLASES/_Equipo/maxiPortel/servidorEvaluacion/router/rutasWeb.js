const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', { titulo: 'Inicio'});
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {titulo: 'Nosotros'})
});

module.exports = router;