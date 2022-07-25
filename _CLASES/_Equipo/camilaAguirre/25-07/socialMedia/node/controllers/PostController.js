// debemos importar el modelo, los metodos se hacen sobre la bd 

import PostModel from '../models/PostModel.js';

// metodos para el CRUD

//mostrar todos los registros
export const getAllPosts = async (req,res) => { // pedido asincrono
    try {
        const posts = await PostModel.findAll() // con este metodo traemos todos los posteos
        res.json(posts)
    
    } catch (error) {
        res.json({message:error.message})
    }
}


//muestra un registro
export const getPost = async (req,res) => {
    try {
        const post = await PostModel.findAll({
            where : {id : req.params.id} 
        })
        res.json(post[0])
    } catch (error) {
        res.json({message:error.message})
    }
}


// crear un registro
export const createPost = async (req,res) => {
    try {
        await PostModel.create(req.body) // se usa req porque se crea algo con lo enviado
        res.json({
            'message' : 'registro creado correctamente'
        })
    } catch (error) {
        res.json({message:error.message})
    }
}


// actualizar un registro
export const updatePost = async (req,res) => {
    try {
        await PostModel.update(req.body,{
            where : {id : req.params.id}
        })
        res.json({
            'message' : 'registro actualizado correctamente'
        })
    } catch (error) {
        res.json({message:error.message})
    }
}


// eliminar un registro
export const deletePost = async (req,res) => {
    try {
        await PostModel.destroy({
            where : {id : req.params.id} // importante pasar el id si no se borra todo
        })
        res.json({
            'message' : 'registro eliminado correctamente'
        })
    } catch (error) {
        res.json({message:error.message})
    }
}