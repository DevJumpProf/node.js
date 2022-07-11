const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "Mi index dinámico"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "Este es un mensaje dinámico de Nosotros"})
})

module.exports = router;