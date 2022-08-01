
import HeroeModel from '../models/HeroeModel.js'

/* Seleccionar todos los registros */
export const getAllHeroes = async(req, res) =>{
    try {
        const heroes = await HeroeModel.findAll();
        res.json(heroes);
    } catch (error) {
        res.json({message: error.message})
    }
}

/* Seleccionar un registro */
export const getHeroe = async(req, res) =>{
    try {
        const heroe = await HeroeModel.findAll({
            where: {id: req.params.id}
        });
        res.json(heroe)
    } catch (error) {
        res.json({message: error.message});
    }
}

/* Crear registro */
export const createHeroe = async (req, res) =>{
    try {
        await HeroeModel.create(req.body);
        res.json({message: `Heroe creado correctamente`})
    } catch (error) {
        res.json({message: error.message})
    }
}

/* Actualizar registro */
export const updateHeroe = async(req,res) =>{
    try {
        await HeroeModel.update(req.body,{
            where: {id: req.params.id}
        });
        res.json({message: `Actualizacion realizada`})
    } catch (error) {
        res.json({message: error.message});
    }
}

/* Eliminar registro */
export const deleteHeroe = async (req, res) =>{
    try {
        await HeroeModel.destroy({
            where: {id: req.params.id}
        });
        res.json({message: `El heroe con id '${req.params.id}' ha sido eliminado correctamente`});
    } catch (error) {
        res.json({message: error.message});
    }
}