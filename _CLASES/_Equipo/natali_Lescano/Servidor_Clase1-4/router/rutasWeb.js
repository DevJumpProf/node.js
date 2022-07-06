const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "pagina: Nosotros"})
})

module.exports = router;