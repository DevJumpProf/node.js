const express= require ("express");
const router= express.Router(); // metodo router


router.get('/',(req, res)=>{
    res.render('index',{mensaje: 'El club de los Desayunos'})
})

router.get('/contact',(req, res)=>{
    res.render('contact')
})

module.exports= router;