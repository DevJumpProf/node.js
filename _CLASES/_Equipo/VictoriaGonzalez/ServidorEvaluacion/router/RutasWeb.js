const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
   res.render("index", {titulo: ""})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "Pagina: Nosotros"})
})

module.exports = router;