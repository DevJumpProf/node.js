const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "Este es un mensaje dinámico de Nosotros"})
})

module.exports = router;