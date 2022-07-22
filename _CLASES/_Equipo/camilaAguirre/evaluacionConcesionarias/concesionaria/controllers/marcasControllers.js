const fs = require('fs');
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

module.exports = {

    index: (req, res, next) => {
        let marcas = []

        concesionaria.forEach(sucursal =>{ /* usamos dos foreach para poder llegar al propio array de autos */
            sucursal.autos.forEach(autos=>{
                if(marcas.includes(autos.marca) == false){ /* esta comparacion sirve para ver que que cada vez que agrege la marca si la quiere volver a agregar le de false y no pueda hacerlo */
                    marcas.push(autos.marca) /* pushea cada marca solo una vez */
                }   
            })
        })
        res.render('marcas',{title: 'Marcas',marcas})
    },

    show : (req,res) => {
        let autosArray= []; /* creo una variable vacia para luego llenarlo con los datos del auto de la marca pasada en la url */
        let brand = req.params.marca; /* guardo en una variable el params para usarlo mas adelante como comparacion */
        let aceptado = false; /* guardo un valor booleano para luego cambiarlo dentro del scope */

        concesionaria.forEach(sucursal => { /* el primer foreach es para acceder al objeto autos del json y extraer todos sus elemento */
            
            
            sucursal.autos.forEach(car=>{
                if(brand == car.marca ){ /* una vez captado el elemento 'autos' se comparada con lo pasado por params para que asi logre guardar dichos elementos dentro del array */
                    autosArray.push(car)
                    
                   aceptado = true /* se cambia el valor del boolean */
                }
            })

            
        })
        console.log(autosArray);
        if(aceptado == true){ /* si el boolean devuelve un true se permite renderizar la vista y enviar los valores */
            res.render('marcaDetalle',{autosArray,brand, title: `${brand}`})
        }
        
         else{
            res.render('error', {titulo:'No pudimos mostrar la vista', descripcion : 'Intentalo nuevamente!', title: 'ERROR'})
        }  
        
        
    }

//----------------
/* show : (req,res) => {
    let autos = [];
    
    concesionaria.forEach(sucursal => {
        sucursal.autos.forEach(car => {
            autos.push(car)
        })
    })

    let marca = autos.find(brand => brand.marca === +req.params.marca)
    console.log(autos);
    console.log(marca); */
    /* res.render('marca',{marca:marca}) */

 /*  } */



}
