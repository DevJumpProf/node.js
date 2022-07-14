module.exports = {
    index: (req, res, next) => {
        res.send('Ni superman, ni la mujer maravilla son tan increíbles como las personas de carne y hueso de nuestra web');
    },
    creditos: (req, res, next) => {
        res.send('Creada por heroes del curso NODE. BackEndirgands');
    },
}