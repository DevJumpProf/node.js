/*
SI UN USUARIO QUIERE INGRESAR A LA RUTA
/users/register o /users/login
LO REDIRECCIONA A SU PERFIL
/users/profile.
*/

module.exports = function redirectUsers(req,res,next){
    if(req.session.user){
        res.locals.user = req.session.user
        res.redirect('/users/profile');
    }
    next();
}