module.exports = {
    index: (req, res, next) => {
        res.render('main',{
            titulo:'Main index',
            elH1:"Ni Superman, Ni la mujer maravilla son tan increibles como las personas de carne y hueso de nuestra web "
        });
       /* res.send ("Ni Superman, Ni la mujer maravilla son tan increibles como las personas de carne y hueso de nuestra web ");  */
    },
    creditos: (req, res, next) => {
        res.render('creditos',{
            titulo:'Creditos',
            elH1:"Pagina creada por heroes del curso de NODE. somos BackEndirgands  "        
        });
        /* res.send ("Pagina creada por heroes del curso de NODE. somos BackEndirgands  "); */
    }
}

