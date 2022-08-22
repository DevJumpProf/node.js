const diasModel = require('../models/diasModel.js');

exports.createDia = async(req,res) => {
    try {
        await diasModel.create(req.body);
        res.json({message: 'Creado correctamente'})
    } catch (error) {
        res.json({message: error.message});
    }
}

exports.getAllDias = async(req, res) =>{
    try {
        const dias = await diasModel.findAll();
        res.json(dias)
    } catch (error) {
        console.log(error);
    }
}

exports.getDia = async (req,res) => {
    try {
        const dia = await diasModel.findByPk(req.params.id);
        res.json(dia);
    } catch (error) {
        res.json(error);
    }
}

exports.updateDia = async(req,res) => {
    try {
        await diasModel.update(req.body,{
            where: {id: req.params.id}
        });
        res.json({message: 'Editado correctamente'})
    } catch (error) {
        res.json(error)
    }
}

exports.deleteDia = async(req, res) => {
    const idReset = sequelize.query("ALTER TABLE dias AUTO_INCREMENT = 0;");
    try {
        await diasModel.destroy({
            where: {id: req.params.id}, idReset
        });
        res.json({messege: 'Destruido correctamente'})
    } catch (error) {
        res.json(error)
    }
}