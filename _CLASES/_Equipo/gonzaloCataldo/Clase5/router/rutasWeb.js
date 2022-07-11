const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulorutas : "Titulo dinamico desde rutas"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulonosotros: "Titulo dinamico para nosotros desde rutas"})
})

module.exports = router;