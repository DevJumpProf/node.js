// Require path
const path = require('path')
// Require multer to use uploadImages
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/Img/Avatar') // Select folder to save img
    },
    filename: function(req, file, cb){ // function to pick a random name that will never repeat
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix +path.extname(file.originalname) )
    }
})
const upload = multer({storage:storage})
// Export upload
module.exports = upload