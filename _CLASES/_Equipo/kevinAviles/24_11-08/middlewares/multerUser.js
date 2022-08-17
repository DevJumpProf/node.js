const multer = require ("multer")
const path = require ("path")

//conf multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    /*     console.log(file) */
      cb(null, 'public/img/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+path.extname(file.originalname))
    }
  })
  
  
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Solo admite formato .png, .jpg .jpeg .gif'));
        }
      }
});

  module.exports = upload;
