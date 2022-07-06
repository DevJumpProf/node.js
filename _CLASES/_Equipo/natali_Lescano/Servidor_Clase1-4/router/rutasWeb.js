const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo:"Pagina: Index",h1: "Mensajito1"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulo:"Pagina: Nosotros", h1: "Mensajito2"})
})

module.exports = router;