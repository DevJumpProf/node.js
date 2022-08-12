import multer from "multer";
import path from "path";

// Config Multer - DiskStorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) // Sumar extension del archivo (path.extname())
    }
  })
  
const uploadUser = multer({ storage: storage })

export default uploadUser;