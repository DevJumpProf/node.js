module.exports = {
    index: (req,res) => {
        res.render('cursos', {titulo: 'Cursos',}); //escribimos cursos
    },
}