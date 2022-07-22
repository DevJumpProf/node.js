const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

function capitalize(palabra){

    let palabraLower=palabra.toLowerCase();
    
    return palabra.charAt(0).toUpperCase() + palabraLower.slice(1);
}

module.exports = {
    indexMarca:(req,res)=>{
        let marcas = [];
        
        concesionarias.forEach(element=>{
            element.autos.forEach(autosSucursal=>{
                if(marcas.includes(autosSucursal.marca) == false){
                    marcas.push(autosSucursal.marca)
                }
            })
        }) 
       res.render('listaMarcas',{
        titulo:'Nuestas marcas',
        marcas:marcas
       })     
    },
    autosMarca:(req,res)=>{
        let {marca} = req.params;
        let autos=[];
        let paramsAceptado= false;
        let marcas=[]
        concesionarias.forEach((element,index)=>{
            marcas.push(index)
            element.autos.forEach(losAutos=>{
                if(losAutos.marca.toLowerCase() == marca.toLowerCase()){
                     autos.push(losAutos) 
                     paramsAceptado=true;
                }
            })
        })
        autos.forEach(element=>{
            delete element.color;
        }); 
        // lo proximo son funciones que eliminan objetos repetidos, nose como lo hace pero lo hace 
        let autosMap = autos.map(auto=>{
            return [JSON.stringify(auto),auto]
        });
        let autosMapArr = new Map (autosMap) //Pares de clave y valor
        let autosUnicos=[...autosMapArr.values()]; 
       
        if(paramsAceptado){
            res.render('marca',{
                titulo:`Marca ${capitalize(marca)}`,
                marca:capitalize(marca),
                autosUnicos:autosUnicos,
                marcas:marcas
               }) 
        }else{
            res.render('404',{
                titulo:'Error 404',
                mensaje:`la marca "${marca}" no fue encontrada`
            }) 
        }
         

       
      
       
        
        
    }
}