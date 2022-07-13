module.exports = {
    users: (req,res)=>{
        res.render('users',{
            titulo:'los Usuario',
            usuarios: ['pepe','lalo','maxi','gonza']
        })
    },
    show:(req,res)=>{
        ['pepe','lalo','maxi','gonza']
    }
}