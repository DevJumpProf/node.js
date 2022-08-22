const express = require('express');
const { getAllDias, createDia, updateDia, deleteDia, getDia } = require('../controllers/diaController.js');
const router = express.Router()


//CRUD DÍAS
router.get('/dias', getAllDias)
router.get('/dias/:id', getDia)
router.post('/dias/crear', createDia)
router.put('/dias/:id', updateDia)
router.delete('/dias/:id', deleteDia)

//CRUD MESES


module.exports = router;