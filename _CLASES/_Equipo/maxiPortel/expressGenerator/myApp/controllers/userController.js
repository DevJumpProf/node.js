module.exports = {
    users : (req, res, next) =>{
        res.render('users', {title: 'Usuarios'}, )
    },
    id: (req, res) => {
        let usersName = ['Juan0810', 'PepeArgent0', 'Usuario123', 'AliciaEncadenada','Nala0000'];
        let { id } = req.params

        if(usersName.includes(id) === true){
        res.render('users', {title: id});
        }else{
            res.render('userNotFound', {title: 'Oops. Usuario no encontrado'});
        }
    },
}


let usuarios = ['Juan0810', 'PepeArgent0', 'Usuario123'];

usuarios.forEach((e, i) => {
    usuarioIndice = e + i;
})