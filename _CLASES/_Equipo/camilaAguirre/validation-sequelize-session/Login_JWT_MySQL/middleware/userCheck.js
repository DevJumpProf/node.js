module.exports = (req,res,next) => {
    if (!req.session.userLog) {
        return res.redirect("/login")
    }
    next()
}