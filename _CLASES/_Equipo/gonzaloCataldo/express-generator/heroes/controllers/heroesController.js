const fs = require ("fs"); //Importamos el modulo FS que sirve para manipular los archivos de nuestro sistema
const heroes = JSON.parse (fs.readFileSync("./data/heroes.json", "utf8")); // JSON.parse convierte un JSON en un objeto de JS, mientras que JSON.stringify convierte un objeto de JS en JSON. Se usa fs.readFileSync para que nos traduzca el archivo JSON y le especificamos que archivo queremos ver.

module.exports ={
    index: (req,res) =>{
        res.send (heroes) //Definios index para que envie el JSON traducido que guardamos en la variable heroes
    }
}

