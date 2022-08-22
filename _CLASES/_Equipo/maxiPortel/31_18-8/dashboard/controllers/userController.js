const UserModel = require('../models/UserModel.js');

//register crear usuario
const createUser = async (req, res) => {
    try {
        await UserModel.create({
            user: req.body.user,
            pass: req.body.pass
        })
        res.json({ messege: 'Successfully created' })
    } catch (error) {
        res.json(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass
        console.log(req.body);
        if (!user || !pass) {
            res.json({ messege: 'Fill in all the fields' })
        } else {
            const passUser = await UserModel.findOne({ //FINDALL DEVUELVE UN ARRAY MAISTRO
                where: { user: user }
            });
            if ((pass !== passUser.pass)) {
                res.json({ messege: 'Incorrect data' })
            } else {
                /* DAR TOKEN Y SESION  */
                res.json({ messege: 'Correct data' })
                res.redirect('home');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async(req, res) => {
    try {
        UserModel.destroy({where:{id: req.params.id}});
        res.json({messege: 'User has deleted'})
    } catch (error) {
        res.json({messege: error})
    }
}

module.exports = {
    createUser,
    deleteUser,
    loginUser,
}