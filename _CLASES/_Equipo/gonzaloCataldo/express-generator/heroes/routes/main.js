const express = require ("express") //Importar Express
const router = express.Router() // Importar Router

const mainController = require ("../controllers/mainController") //Guardar el controlador en una variable

router.get("/",mainController.index) //Cuando la ruta sea lo que este en comillas, se va a conectar con el controlador definido y sus metodos
router.get ("/creditos", mainController.creditos) 

module.exports = router //exportar router