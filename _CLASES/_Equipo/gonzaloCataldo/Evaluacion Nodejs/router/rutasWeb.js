const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo : "Katech Hardware Store"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulo: "Nosotros - Katech Store"})
})

module.exports = router;