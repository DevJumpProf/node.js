import HeroeModel from "../models/HeroeModel.js"

//mostrar todos los registros

export const getAllHeroes = async (req,res)=>{
    try {
        const heroes = await HeroeModel.findAll()
        res.json(heroes)
    } catch (error) {
        res.json ({message:error.message})  
    }
}
// mostrar registro

export const getHeroe = async (req,res)=>{
    try {
        const heroe = await HeroeModel.findAll({
            where: {id:req.params.id}
        })
        res.json (heroe[0])
    } catch (error) {
        res.json ({message:error.message})  
    }
}
//crear registro
export const createHeroe = async (req,res)=>{
try {
    await HeroeModel.create (req.body)
    res.json({
        "message": "registro creado correctamente"
    })
} catch (error) {
    res.json ({message:error.message})  
}
}
// actualizar registro

export const updateHeroe = async (req,res)=>{
    try {
        await HeroeModel.update(req.body,{
            where: {id:req.params.id} 
    })
    res.json({
        "message": "registro Actualizado correctamente"
    })
    } catch (error) {
        res.json ({message:error.message})   
    }
}

//borrar registro

export const deleteHeroe = async (req,res)=>{
    try {
        await HeroeModel.destroy({
            where: {id:req.params.id} 
    })
    res.json({
        "message": "registro Eliminado correctamente"
    }) 
    } catch (error) {
        res.json ({message:error.message})   
    }
}