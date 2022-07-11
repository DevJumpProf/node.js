const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo:"SuperBazar: Index"})
})

router.get('/cocina', (req, res) => {
    res.render("cocina", {titulo:"SuperBazar: Nosotros"})
})

router.get('/categorias', (req, res) => {
    res.render("categorias", {titulo:"SuperBazar: Nosotros"})
})

module.exports = router;