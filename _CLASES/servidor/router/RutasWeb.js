const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo:"Pagina: Index"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulo:"Pagina: Nosotros"})
})

module.exports = router;