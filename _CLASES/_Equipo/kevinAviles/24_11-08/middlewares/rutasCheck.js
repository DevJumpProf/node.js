module.exports = (req,res,next) => {
    if(req.session.userNew){
  /*       res.locals.userNew= req.session.userNew; */
        next()
    }else{
        res.redirect('/login')
    }
}