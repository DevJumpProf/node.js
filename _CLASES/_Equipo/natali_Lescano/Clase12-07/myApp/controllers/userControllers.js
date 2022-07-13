module.exports = {
    users: (req, res, next) => {
        res.render('users', { title:"Users"});
      },

      show: (req, res, next) => {
        ["Gabriel", "Juan", "Mariana"];
      },
};

