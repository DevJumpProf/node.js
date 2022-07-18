module.exports = {
    index: (req, res, next) => {
        res.render("main",{tituloweb: "aaaaaa"})
    },
    creditos: (req, res, next) => {
        res.send("Pagina creada por heroes del curso de NODE. somos BackEndirgands  ")
    }
}




/* const mainController = {
    index: (req, res, next) => {  
    },
    creditos: (req, res, next) => {
    },

}
module.exports = mainController */