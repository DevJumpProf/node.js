const express = require("express")
const router = express.Router()
const upload = require("../middlewares/uploadImages.js")
const checks = require("../validations/validationRegister.js")
const pageController = require("../controllers/pageController.js")


router.get("/", pageController.isAuthenticated, (req,res)=>{
    res.render('home')
})
router.get("/login", (req,res)=>{
    res.render('login', {layout: "login", alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register', {layout: "register"})
})

//crud
router.post('/register',upload.any(upload), checks, pageController.registerUser)
router.post('/login', pageController.loginUser)  
router.get("/tables", pageController.isAuthenticated, pageController.tableView)
router.get("/notifications", pageController.isAuthenticated, pageController.notificationsView)
router.get('/logout', pageController.logout)


module.exports = {routes:router}