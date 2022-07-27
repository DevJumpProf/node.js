import HeoresModel from "../models/HeroeModel.js";


/* Mostrar todos los registros */
export const getAllHeores = async(req,res)=>{
    try {
        const heores = await HeoresModel.findAll();
        res.json(heores);
    } catch (error) {
        res.json({message:error.message});
    }
}

/* Mostrar un solo registro */
export const getHeroe = async (req,res)=>{
    try {
        const heroe = await HeoresModel.findOne({
            where:{
                id:req.params.id
            }
        })
        res.json(heroe)
    } catch (error) {
        res.json({message:error.message});
    }
}
/* crear registro */
export const createHeroe = async(req,res)=>{
    try {
        await HeoresModel.create(req.body);
        res.json({
            "message":"Registro Creado... Ta bien"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
/* modificar registro */
export const updateHeroe = async(req,res)=>{
    try {
        await HeoresModel.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message": "Registro actualizado con exito"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
export const deleteHeroe = async(req,res)=>{
    try {
        await HeoresModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message": "Registro eliminado con exito"
        });
    } catch (error) {
        res.json({message:error.message});
    }
}
/* eliminar registro */