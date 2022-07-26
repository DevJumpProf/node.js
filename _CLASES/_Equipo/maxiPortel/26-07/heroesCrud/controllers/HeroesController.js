import HeroeModel from "../models/HeroeModel.js";

//mostrar todos los registro
export const getAllHeroes = async(req,res) =>{
    try {
        const heroes = await HeroeModel.findAll();
        res.json(heroes)
    } catch (error) {
        res.json({message: error.message});
    }
}

//mostrar 1 registro
export const getHeroe = async(req,res) =>{
    try {
        const heroe = await HeroeModel.findAll({
            where: {id: req.params.id}
        });
        res.json(heroe) //hacer prueba sin indice
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createHeroe = async(req,res) =>{
    try {
        await HeroeModel.create(req.body);
        res.json({"message": 'Creado correctamente'}) // posible error
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateHeroe = async(req,res) =>{
    try {
        await HeroeModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado correctamente'
        })
    } catch (error) {
        res.json({message: error.message});
    }
}


export const deleteHeroe = async(req,res) =>{
    try {
        await HeroeModel.destroy({
            where: {id: req.params.id}
        })
        res.json('Eliminado Correctamente') //posible error
    } catch (error) {
        res.json({message: error.message});
    }
}