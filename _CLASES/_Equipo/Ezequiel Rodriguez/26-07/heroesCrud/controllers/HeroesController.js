
import HeroeModel from "../models/HeroeModel.js"


// Mostrar todos los registros
export const getAllHeroes = async (req, res) => {
    try {
        const heroes = await HeroeModel.findAll()
        res.json(heroes)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar registro
export const getHeroe = async (req, res) => {
    try {
        const heroe = await HeroeModel.findAll({
            where: { id: req.params.id }
        })
        res.json(heroe[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear registro
export const createHeroe = async (req, res) => {
    try {
        await HeroeModel.create(req.body)
        res.json("Registro creado correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar registro
export const updateHeroe = async (req, res) => {
    try {
        await HeroeModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json(
            "Registro actualizado correctamente"
        )
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Borrar registro
export const deleteHeroe = async (req, res) => {
    try {
        await HeroeModel.destroy({
            where: {id:req.params.id}
        })
        res.json("Registro eliminado correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}