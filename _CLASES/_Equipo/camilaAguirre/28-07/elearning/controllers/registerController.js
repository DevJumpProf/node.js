/* import RegisterModel from '../models/RegisterModel.js'; */

/* export const  getRegister = async (req,res) => {
    try {
        res.render('register')
    } catch (error) {
        res.json({message:error.message})
    }
} */

export const index = (req, res) =>{
    res.render("registro", {title: "Registro"})
}


