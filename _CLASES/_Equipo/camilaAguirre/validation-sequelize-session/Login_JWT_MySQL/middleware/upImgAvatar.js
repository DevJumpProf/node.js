const multer = require('multer')
const path = require('path'); /* se requiere path y se lo utiliza en la config. de multer */


//configuracion subida de archivos-multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    /*     console.log(file) */
      cb(null, 'public/img/users') /* se indica en que carpeta guarda los archivos */
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) /* con path indicamos que nos debe traer la extension del archivo subido */
    }
  })
  
const upload =  multer({ storage: storage }) 

module.exports = upload


/* var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single('file'); */