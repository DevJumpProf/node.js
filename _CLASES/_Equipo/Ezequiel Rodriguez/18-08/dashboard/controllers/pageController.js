vistaPrincipal = (req, res) => {
    res.render('home')
}

vistaTables = (req, res) => {
    res.render('tables')
}

vistaNotifications = (req, res) => {
    res.render('notifications')
}

module.exports = {vistaPrincipal, vistaTables, vistaNotifications};