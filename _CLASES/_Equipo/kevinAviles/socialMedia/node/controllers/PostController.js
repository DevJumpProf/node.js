//importamos el modelo
import PostModel from "../models/PostModel.js";

//metodos para el Crud

//mostrar todos los registros 
export const getAllPost = async(req,res)=>{
    try {
        const posts = await PostModel.findAll();
        res.json(posts);
    } catch (error) {
        res.json({message:error.message});
    }
}
//Mostrar un registro 
export const getPost = async (req,res)=>{
    try{
        const post = await PostModel.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(post[0]);
    } catch (error) {
        res.json({message:error.message});
    }
}
//Crear un registro
export const createPost = async (req,res)=>{
    try {
        await PostModel.create(req.body);
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:error.message});
    }
}
//actualizar un registro
export const updatePost = async (req,res)=>{
    try {
        await PostModel.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Registro actualizado correctamente"
        })

    } catch (error) {
        res.json({message:error.message});
    }
}
//Eliminar un registro

export const deletePost = async (req,res)=>{
    try {
        await PostModel.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:error.message});
    }
}