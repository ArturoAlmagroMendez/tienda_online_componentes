const express = require("express");
const cors = require("cors");
const fs = require('fs'); 
const app = express();
const multer = require('multer');

var corsOptions = {
    origin: ['http://localhost:8081', 'http://127.0.0.1:5500', 'http://127.0.0.1:5501'] //Donde pone localhost iria la el dominio de la web una vez se sube a producción
};

app.use(cors(corsOptions)); //Oye express,utiliza esta configuración de cors
app.use(express.json({limit: "10mb", extended: true})); //No cojas archivos mayores a 10mb
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000})); //limitar a 10 mb los parametros que se envian por URL

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/storage/tmp/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage })

var routePath="./src/routes/";

fs.readdirSync(routePath).forEach(function(file) {
    require(routePath + file)(app, upload);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});