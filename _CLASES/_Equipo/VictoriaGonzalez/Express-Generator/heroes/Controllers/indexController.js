module.exports = {
 
    index: (req, res, next) => {
       res.render ('index', {title: 'Inicio'}); 
    },
    creditos: (req, res, next) => {
res.send ('Pagina creada por Victoria González, su personaje favorito es Uniqua')
    },
}



