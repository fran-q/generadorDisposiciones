const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);
router.post("/generate", mainController.generate);
router.post("/alta", mainController.alta);
router.post("/baja", mainController.baja);
router.post("/salida", mainController.salida);
router.post("/agregar", mainController.agregar);

module.exports = router;