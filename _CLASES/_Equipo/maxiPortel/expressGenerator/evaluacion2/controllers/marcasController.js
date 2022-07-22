const express = require('express');
const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

module.exports = {
    index: (req, res, next) => {
        let autosArray = [] //index autos
        concesionarias.forEach(element => {
            element.autos.forEach(datosAuto => {
                if (autosArray.includes(`${datosAuto.marca}`) == false) {
                    autosArray.push(`${datosAuto.marca}`)
                }
            })
        }); // recorremos las sucursales(element) entrando a "autos". De autos tomamos "Marca" para llevarlo como string a la vista. Además utilizamos un "if" con un ".includes()" para verificar que no se repitan los autos. Esto termina pusheando todo a un Array que vamos a pasar para poner en la vista
        res.render('marcas', { title: 'Lista de Marcas', autosMarca: autosArray, cantidad: autosArray.length });
    },

    marca: (req, res, next) => {
        let { marca } = req.params;
        let modelos = [];
        let check = false;

        concesionarias.forEach((element) => {
            element.autos.forEach(datosAuto => {
                if (marca == datosAuto.marca && !modelos.includes(datosAuto.modelo)) {
                    modelos.push(datosAuto.modelo);  // Solo mandamos el modelo para la vista
                    check = true
                }
            })
        });
        if (check === true) {
            res.render("marca", {
                title: `Modelos ${marca}`,
                modelo: modelos,
                marca: marca
            })
        } else {
            res.render('notFound', { title: 'Error' })
        };
    }
}
