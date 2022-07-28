const express = require('express'); //requerimos express
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo:"Pagina: Index"})
})


module.exports = router;