module.exports = {
    index: (req, res, next) => {
       res.send ("Ni Superman, Ni la mujer maravilla son tan increibles como las personas de carne y hueso de nuestra web ") 
    },
    creditos: (req, res, next) => {
res.send ("Pagina creada por heroes del curso de NODE. somos BackEndirgands  ")
    }
}




/* const mainController = {
    index: (req, res, next) => {  
    },
    creditos: (req, res, next) => {
    },

}
module.exports = mainController */