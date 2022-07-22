const fs = require("fs");
const concesionarias = JSON.parse(
    fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
    index: (req, res, next) => {
        let autosArray = []; //index autos
        concesionarias.forEach((element) => {
            element.autos.forEach((datosAuto) => {
                if (autosArray.includes(`${datosAuto.marca} ${datosAuto.modelo}`) == false) {
                    autosArray.push(`${datosAuto.marca} ${datosAuto.modelo}`);
                }
            });
        }); // recorremos las sucursales(element) entrando a "autos". De autos tomamos "Marca" y "Modelo" para llevarlo como string a la vista. Además utilizamos un "if" con un ".includes()" para verificar que no se repitan los autos. Esto termina pusheando todo a un Array que vamos a pasar para poner en la vista
        res.render("autos", {
            title: "Lista de autos",
            autosModeloMarca: autosArray,
            cantidad: autosArray.length,
        });
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
            res.render("marcasAuto", {
                title: `Modelos ${marca}`,
                modelo: modelos,
                marca: marca
            })
        } else {
            res.render('notFound', { title: 'Error' })
        };
    },

/* un if dividido en 4 partes :
1° si hace match con " modelo"
2° si hace match "modelo + año"
3° si hac match "modelo + color"
4° si hace match "modelo + color + año" */


    datos: (req, res, next) => {
        
        const { dato } = req.params;

        let arrayDatosModelos = []

        concesionarias.forEach(element => {
            element.autos.forEach(datosAuto => {

                if(dato == datosAuto.modelo){ //todos los modelos sin repetir
                    arrayDatosModelos.push(
                        ({modelo: datosAuto.modelo, color: datosAuto.color, anio: datosAuto.anio, sucursal: element.sucursal})
                    )
                }
                else if(dato == (datosAuto.modelo+'='+datosAuto.color)){ //todos modelos del mismo color
                    arrayDatosModelos.push(
                        ({modelo: datosAuto.modelo, color: datosAuto.color, anio: datosAuto.anio, sucursal: element.sucursal})
                    )
                }
                else if(dato == (datosAuto.modelo+'='+datosAuto.anio)){//todos modelos del mismo año
                    arrayDatosModelos.push(
                        ({modelo: datosAuto.modelo, color: datosAuto.color, anio: datosAuto.anio, sucursal: element.sucursal})
                    )
                }
                else if(dato == (datosAuto.modelo+'='+datosAuto.color+'='+datosAuto.anio) || dato == (datosAuto.modelo+'='+datosAuto.anio+'='+datosAuto.color)){//todos años+color o color+años
                    arrayDatosModelos.push(
                        ({modelo: datosAuto.modelo, color: datosAuto.color, anio: datosAuto.anio, sucursal: element.sucursal})
                    )
                }
            })
            
        });

        res.render('datos', {title: 'Datos', info: arrayDatosModelos})
        console.log(arrayDatosModelos);
    },
};