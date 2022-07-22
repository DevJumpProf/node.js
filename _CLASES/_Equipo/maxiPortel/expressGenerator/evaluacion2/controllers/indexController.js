const express = require('express');
const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

module.exports = {
    index: (req, res, next) => {
        concesionariasArray = []
        concesionarias.forEach(element => {
            if (!concesionarias.includes(element.sucursal))
                concesionariasArray.push({sucursal: element.sucursal})
        });
        res.render('index', { title: 'Bienvenido', concesionarias: concesionariasArray });
    }
}