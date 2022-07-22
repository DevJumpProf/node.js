const fs = require("fs");

const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    index: (req, res, next) => {
        res.render('index', { title: "ArbiAutos", concesionarias: concesionarias })
    },
}


