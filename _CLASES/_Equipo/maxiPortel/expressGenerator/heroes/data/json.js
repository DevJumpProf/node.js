const fs = require('fs'); //requerimos fs para hacer la escritura


//creamos el objeto que pasaremos a .json
const data = {
    'cursos' : [{
        'id': '1',
        'nombre': 'Lenguaje',
        'apellido': 'jejeje',
        'detalles': 'jejeje',
    },
    {
        'id': '2',
        'nombre': 'Matematica',
        'apellido': 'jejeje',
        'detalles': 'jejeje',
    },
    {
        'id': '3',
        'nombre': 'Programación',
        'apellido': 'jejeje',
        'detalles': 'jejeje',
    },
    {
        'id': '4',
        'nombre': 'Química',
        'apellido': 'jejeje',
        'detalles': 'jejeje',
    },]
};

let jsonData = JSON.stringify(data);  //'JSON.stringify' traduce el objeto('data) a string de JSON

//fs.writeFile traduce ese string a JSON donde pasamos 3 parametros. El primero es la ruta donde se va a crear y el nombre del archivo. En el segundo llamamos al objeto ya pasado a 'string'. Y en el tercero hacemos un callback para que nos diga por consola si se creo bien o si tuvo un error
fs.writeFile('cursos.json', jsonData, (error) => {
    if(error){
        console.log('Error');
    }else{
        console.log('Generado correctamente');
    }
});

// una vez ejecutado el archivo(en este caso 'json.js') se creara el nuevo json