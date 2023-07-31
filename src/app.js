//Definicion de librerias
const express = require("express");
const path = require("path");
//Definicion de rutas
const mainRoutes = require("./routers/mainRoutes.js");

//Creacion de la app con express y definicion puerto
const app = express();
const port = process.env.port || 3001;

//Configuracion del motor de vista
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "views"));

//Confiugracion de la capeta publica de archivos estaticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

//Capturamos la informacion dentro de los formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configuracion de rutas
app.use("/", mainRoutes);

//Iniciar el servidor
app.listen(port, () =>
    console.log("Servidor iniciado en http://localhost:3001/")
);