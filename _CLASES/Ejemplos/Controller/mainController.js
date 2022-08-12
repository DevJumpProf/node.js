/*
MAIN PRINCIPAL PARA USAR LOS Users DE LA BASE DE DATOS EN EL INDEX.
*/
//guardo la base de datos en "db", para empezar a manipularlo.
const db = require('../database/models');

module.exports = {
    index: function (req, res) {
        //recorro la base de datos "Users, y envio todos los Users a su ruta"
        let producto = db.Users.findAll()
        //GUARDO LA CANTIDAD DE Users PARA PODES RECORRERLOS EN LA PESTAÑA "detalle del user"
        let total = db.Users.count();
        //GUARDO TODO LOS DATOS DE LA TABLA EN idCategorias
        let subCategorias = db.Subcategorias.findAll()
        //LO PASO COMO PROMESA EN UNA LLAVE A LAS VARIABLES QUE VOY A USAR
        Promise.all([producto, subCategorias, total])

            .then(([producto, subCategorias, total]) => {
                res.render('index', {
                    title: 'Petshop',
                    css: 'index.css',
                    users: user,
                    subCategorias: subCategorias,
                    total: total
                })
            })
            .catch(error => {
                res.send(error)
            })
    },
    

}