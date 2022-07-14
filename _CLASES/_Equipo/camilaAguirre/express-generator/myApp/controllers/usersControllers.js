module.exports = {
    user : function(req,res,next){
        res.render('user', {usuarios: ['CAMILA', 'VICTORIA', 'CAROLINA', 'LUANA']})
    },
    show : (req,res,next) => {
        let idUser = req.params.id;  // guardamos en una variable para que quede guardado el id que se lo pasa por el buscador
       if(idUser == '1'){
        res.render('user', {usuarios : ['Gabriel', 'Maxi', 'Natali']})
       }else if (idUser == 2){
        res.render('user', {usuarios : ['Gabriel','Natali']})
       }else if(idUser == 3){
        res.render('user', {usuarios : 'Gabriel'})
       }else{
        res.render('user', {usuarios : 'Camila'})
       }

       
    } 
}
