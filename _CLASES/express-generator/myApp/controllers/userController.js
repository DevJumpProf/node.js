module.exports = {
index : (req, res, next)=> {
    res.render('users', { title: 'Users' });
  }
/* show: (req, res, next)=> {
    ["Gabriel","Juan", "Agostina"]
} */
}



