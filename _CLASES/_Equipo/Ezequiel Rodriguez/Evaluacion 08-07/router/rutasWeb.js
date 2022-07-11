const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("index", {titulo: "HOME | INDEX"})
})

router.get('/nosotros', (req, res) => {
    res.render("nosotros", {titulo: "WEB | NOSOTROS"})
})

module.exports = router;