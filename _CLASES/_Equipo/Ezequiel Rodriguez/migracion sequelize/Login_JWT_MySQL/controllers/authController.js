import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { promisify } from 'util'
import userModel from '../models/userModel.js';
import { check, validationResult, body } from 'express-validator';


//procedimiento para registrarnos
export const register = async (req, res, next) => {
    let errors = validationResult(req);
    const { name, user, email } = req.body;
    const avatar = (req.files[0]) ? req.files[0].filename : "default.jpg"
    const pass = await bcryptjs.hash(req.body.pass, 10);

    if (errors.isEmpty()) {
        try {
            await userModel.create({
                name: name,
                user: user,
                pass: pass,
                email: email,
                avatar: avatar
            })
            res.render("login", {alert: false})
        } catch (error) {
            res.json({ message: error.message });
        }
    } else {
        res.render("register", { errors: errors.errors })
    }
}


/////////////////////////////


export const login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (!user || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon: 'info',
                showConfirmButton: true,
                /* timer: false, */
                ruta: 'login'
            })
        } else {
            const usuarioPass = await userModel.findAll({
                where: { user: user }
            })
            if (usuarioPass.length == 0 || !(await bcryptjs.compare(pass, usuarioPass[0].pass))) {
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o Password incorrectas",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    /* timer: false, */
                    ruta: 'login'
                })
            } else {
                //inicio de sesión OK
                const id = usuarioPass[0].id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })
                //generamos el token SIN fecha de expiracion
                /* const token = jwt.sign({id: id}, process.env.JWT_SECRETO) */
                console.log("TOKEN: " + token + " para el USUARIO : " + user)

                const cookiesOptions = {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookiesOptions)
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexión exitosa",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 800,
                    ruta: ''
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

////////////////////////

export const isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const userId = await userModel.findAll({
                where: { id: decodificada.id}
            })
            if (!userId) { return next() }
            req.user = userId[0]
            return next()
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        res.redirect('/login')
    }
}

// MOSTRAR USUARIOS
export const show = async (req,res) => {
    try {
        const showUsers = await userModel.findAll()
        res.render('index', {users: showUsers, user: req.user});
    } catch (error) {
        res.json({ message: error.message });    
    }
}

// MOSTRAR UN USUARIO
export const getUser = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where: {id: req.params.id}
        }) 
        res.render("editUser", {user: user[0]})
    } catch (error) {
        res.json({message: error.message})
    }
}

// ACTUALIZAR USUARIO
export const userEdit = async (req, res) => {
    const usuario = await userModel.findByPk(req.params.id);
    if (!usuario) {
        res.redirect('/');
    } else {
        res.render('editUser', {
            user: usuario
        })
    }
}

export const updateUser = async (req, res) => {
    const { name, user, email } = req.body;
    /* const name = (req.body[0]) ? req.body[0].name : req.body.name;
    const user = (req.body[0]) ? req.body[0].user : req.body.user;
    const email = (req.body[0]) ? req.body[0].email : req.body.email; */
    const avatar = (req.files[0]) ? req.files[0].filename : req.body.avatar    
    await userModel.update({
        name: name,
        user: user,
        email: email,
        avatar: avatar
    }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/');
}


// ELIMINAR USUARIO
export const deleteUser = async (req, res) => {
    try {
        await userModel.destroy({
            where: {id: req.params.id}
        })
        res.redirect("/");
    } catch (error) {
        res.json({message: error.message})
    }
}

// ASIGNAR ROL A USUARIO
/* export const rolUser = async (req, res) => {
    req.session.user = 
    req.session.rol = 
} */

//////////////////////

export const logout = (req, res) => {
    res.clearCookie('jwt')
    return res.redirect('/')
}
