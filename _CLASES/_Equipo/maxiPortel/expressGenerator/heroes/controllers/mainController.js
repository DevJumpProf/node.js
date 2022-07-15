module.exports = {
    index: (req, res, next) => {
        res.render('main', {titulo: 'Inicio'});
    },
    creditos: (req, res, next) => {
        res.send('Creada por heroes del curso NODE. BackEndirgands');
    },
}