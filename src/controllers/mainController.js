//librerias para generar la disposicion
const pizZip = require("pizzip");
const docxTemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

const mainController = {};

mainController.home = async (req, res) => {
    return res.render("home.ejs");
};
mainController.generate = async (req, res) => {
    const content = fs.readFileSync(
        path.resolve(__dirname,"../templates/input/plantilla.docx"),"binary"
    );

    const zip = new pizZip(content);

    const doc = new docxTemplater(zip,{
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.render({
        name: req.body.nombre,
    });

    const buf = doc.getZip().generate({
        type: "nodebuffer", 
        compression: "DEFLATE",
    });

    fs.writeFileSync(path.resolve(__dirname, "../templates/output/salida.docx"), buf);

    return res.render("generated.ejs");
};
mainController.alta = async (req, res) => {
    return res.render("dispAlta.ejs");
};
mainController.baja = async (req, res) => {
    return res.render("dispBaja.ejs");
};
mainController.salida = async (req, res) => {
    return res.render("dispSalida.ejs");
};
mainController.agregar = async (req, res) => {
    return res.render("agregar.ejs");
};

module.exports = mainController;