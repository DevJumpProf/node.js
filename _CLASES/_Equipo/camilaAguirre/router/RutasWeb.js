const express = require('express'); // Debemos requerir express antes 
const router = express.Router(); //llamamos al metodo router

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulo: "Este es un mensaje dinámico de NOSOTROS"})
})

module.exports = router;