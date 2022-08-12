/*
IF - VERIFICA QUE EL USUARIO ESTE LOGuEADO Y SI LO ESTA, MIENTRAS ESA
DISTINTO AL IDE DEL ADMINSTRADOR LO REDIRECCIONA AL HOME SI QUIERE 
ENTRAR A LA RUTA /curso/cursoAdd.
ELSE - CUANDO NO HAY NINGUN USUARIO LOGuEADO, SERÍA UN INVITADO, TAMBIEN
LO REDIRECCIONA AL HOME SI QUIERE ENTRAR A LA RUTA /curso/cursoAdd
*/
module.exports = function redirectAdmin(req,res,next){
    if(req.session.user){
        let usuario = req.session.user;
        if(usuario.rol!='admin'){
            res.redirect('/')
        }
    }if(!req.session.user){
        res.redirect('/')
    }
    next();
}