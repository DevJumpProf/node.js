/*
COOKIES PARA QUE QUEDE EL REGISTRO DEL ULTIMO LOGuEO ACTIVO
*/

module.exports = function(req,res,next){
    if(req.cookies.userELearning){
        console.log(req.cookies.useruserELearning)
        req.session.user = req.cookies.useruserELearning;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}