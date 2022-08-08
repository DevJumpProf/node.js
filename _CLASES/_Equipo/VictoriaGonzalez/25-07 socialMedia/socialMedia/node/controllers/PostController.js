//importamos el modelo de la basde de datos
import PostModel from "../models/PostModel.js";

//metodos para el 'CRUD'

//mostrar todos los registros (posteos en este caso)
export const getAllPosts = async(req, res) => {
    try {
        const posts = await PostModel.findAll();
        res.json(posts);
    } catch (error) {
        res.json({message: error.message});
    }
}

//mostrar un solo registro (post en este caso)
export const getPost = async(req, res) =>{
    try {
        const post = await PostModel.findAll({
            where: {id: req.params.id}
        })
        res.json(post[0])  //posicion 0 porque nos trae 1
    } catch (error) {
        res.json({message: error.message});
    }
}

//Crear un registro
export const createPost = async(req, res) =>{
    try {
        await PostModel.create(req.body);
        res.json({
            'message': 'registro creado correctamente'
        })
    } catch (error) {
        res.json({message: error.message});
    }
}

//Actualizar registro
export const updatePost = async(req, res) =>{
    try {
        await PostModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            'message': 'registro actualizado correctamente'
        })
    } catch (error) {
        res.json({message: error.message});
    }
}

//Eliminar registro
export const deletePost = async(req, res) =>{
    try {
        await PostModel.destroy({
            where: {id: req.params.id}
        });
        res.json({
            'message': 'registro eliminado correctamente'
        })
    } catch (error) {
        res.json({message: error.message});
    }
}