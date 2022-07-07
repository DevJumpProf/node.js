const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
   
    res.render("index", {titulo : "Pagina: Index"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "Pagina: Nosotros"})
})

module.exports = router;