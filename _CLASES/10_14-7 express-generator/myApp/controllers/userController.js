module.exports = {
index : (req, res, next)=> {
    res.render('users', { title: 'Users' });
  },
  idUser :(req, res, next)=> {
    
    if (req.params.idUser==undefined){
      res.send ("no esta disponible " + req.params.idUser);
    }else{
      res.send ("Informacion del usuario " + req.params.idUser);
    }

  },
  idLenguajes :(req, res, next)=> {
    res.send ("el usuario " + req.params.idUser + " maneja el lenguaje " + req.params.idLenguajes);
  },
}



