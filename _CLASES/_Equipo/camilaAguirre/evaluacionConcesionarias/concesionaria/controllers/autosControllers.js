const fs = require('fs');
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

module.exports = {
    index : (req,res) => {
        let autos = [];
        
        concesionaria.forEach(sucursal => { /* con un forEach podemos acceder a sucursales y su informacion pero para acceder a autos y guardar esa info en otro array debemos hacer otro forEach */
            sucursal.autos.forEach(car => {
                autos.push(car) /* se guarda los autos en el array */
            })
        })
        console.log(autos);
        res.render('autos',{title: 'Autos',autos:autos}) /* enviamos el array con todos los autos */
    },

    marca : (req,res) =>{

        let brand =req.params.marca;
        let autos = [];
        let aceptado = false;

        concesionaria.forEach(sucursal => {
            sucursal.autos.forEach(car => {
                if(car.marca == brand){
                    autos.push(car);
                    aceptado = true
                }
            })
        })
        if(aceptado == true){
            res.render('autos2', {brand:brand, autos:autos, title : `${brand}`})
        }
        res.render('error', {titulo:'No pudimos mostrar la vista', descripcion : 'Intentalo nuevamente!', title: 'ERROR'})

    },

    dato : (req,res) => {
        let brand =req.params.marca;
        let keyword = req.params.dato;
        let autos = [];
        let aceptado = false;

        concesionaria.forEach(sucursal => {


            sucursal.autos.forEach(car => {
                if(car.marca == brand && (car.modelo == keyword || car.color == keyword || car.anio == keyword)){
                    autos.push(car);
                    aceptado = true
                }
            })

            
        })

        // 1° intento de borrado de objetos repetidos en array autos
        

    /* const autos2 = new Set(autos);
    console.log(autos2);
    let resultado = [...autos2]; 

        console.log(resultado)        */
        // 2° intento
    /* let resultado = {};
        autos.forEach((item)=>{
            //pushes only unique element
            if(!resultado.includes(item.marca && item.modelo && item.anio && item.color && item.img)){
                resultado.push(item.marca,item.modelo,item.anio,item.color,item.img);
            }
        })
        console.log(resultado); */ // si bien cumple con la condicion, devuelve un array de elementos ya no en objetos 
    
//-----------------------





    if(aceptado == true){
             res.render('dato', {
             brand, autos2:autos , title: `${brand}`
       })
        /* console.log(resultado); */
    } else {
        res.render('error', {titulo:'No pudimos mostrar la vista', descripcion : 'Intentalo nuevamente!', title: 'ERROR'})
    }
    
  


    }

}
//}

/*let resultado = [];

    autos.forEach(detalle => {
      if (detalle.modelo.includes(keyword) || detalle.anio.includes(keyword) || detalle.color.includes(keyword)){
        resultado.push(detalle)
      }else{
        null
      }
    })*/

    