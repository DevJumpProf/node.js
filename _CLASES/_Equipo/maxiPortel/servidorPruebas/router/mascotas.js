const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {id: 'jdjdjd', nombre: 'Rex', descripcion: 'grande y ruidoso'},
            {id: 'jdjdjd2', nombre: 'Rex2', descripcion: 'pequeño y ruidoso'},
        ]})
})

module.exports = router;