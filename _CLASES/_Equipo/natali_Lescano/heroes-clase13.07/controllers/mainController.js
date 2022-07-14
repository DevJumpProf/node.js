module.exports = {
    index: (req,res,next) => {
        res.send("Ni superman, ni la mujer maravilla son tan increibles como las personas de carne y hueso de nuestra web")
    },
    creditos: (req,res,next) => {
       res.send ("Pagina creada por los heroes BackEndirgands")
    }
}