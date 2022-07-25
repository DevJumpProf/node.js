// importamos el modelo

import PostModel from "../models/PostModel.js";

// metodos para el CRUD

// mostrar todos los registros

export const getAllPosts = async (req, res,) => {
    try {
        // esperar que de la tabla se muestre todo
        const posts = await PostModel.findAll()
        res.json(posts)
        //palabra reservada error tiene todos los errores que pueden surgir
    } catch (error) {
        res.json({ message: error.message })
    }
}


//MOSTRAR UN REGISTRO READ 
export const getPost = async(req, res) =>{
    try {
        const post  = await PostModel.findAll({
            where: {id:req.params.id}
        })
        res.json(post[0])
    } catch (error){
        res.json({message:error.message})
    }
}



//Crear un registro  CREATE
export const createPost = async(req, res)=>{
    try {      //metodo que permite crear un registro
               
        await PostModel.create(req.body)
        res.json({
            "message":"registro creado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

// Actualizar un registro UPDATE
export const updatePost = async(req, res)=>{
    try {         //actualiza el cuerpo del registro existente
        await PostModel.update (req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message": "registro actualizado correctamente"
        })
        
    } catch (error) {
        res.json({message:error.message})
    }
}



//Eliminar un registro  DELETE
export const deletePost = async(req, res)=>{
    try {
        await PostModel.destroy ({
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
    })
    }   catch (error) {
        res.json({message:error.message})
        }
    }

