import HeroeModel from "../models/HeroeModel.js"


//mostrar los registros

export const getAllHeroes = async (req,res)=>{
try {
    const heroes = await HeroeModel.findAll()
    res.json(heroes)
} catch (error) {
    res.json ({message:error.message})
}
}

//mostrar registro

export const GetHeroe = async(req,res)=>{
    try {
        const heroe = await HeroeModel.findAll({
            where: {id:req.params.id}
        })
        res.json (heroe)
    } catch (error) {
        res.json ({message:error.message}) 
    }
}

//crear registro

export const CreateHeroe = async(req,res)=> {
    try {
       await HeroeModel.create (req.body)
       res.json({
        "Message": "registro creado correctamente"
       }) 
    } catch (error) {
        res.json ({message:error.message}) 
    }
}

//actualizar registro

export const updateHeroe = async(req,res)=>{
    try {
        await HeroeModel.update(req.body,{
            where: {id:req.params.id}
        })
        res.json({"Message":"Registro actulizado correctamente"})
    } catch (error) {
        res.json ({message:error.message})
    }
}

//Eliminar registro

export const deleteHeroe = async (req,res) => {  
    try {
        await HeroeModel.destroy({
        where : {id : req.params.id}
    }) 
    res.json({
        'message' : 'registro eliminado correctamente'
    })
    } catch (error) {
    res.json({message:error.message})
    }
}