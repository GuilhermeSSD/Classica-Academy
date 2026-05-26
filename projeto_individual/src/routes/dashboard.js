var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/maiores-notas/:idUsuario", function (req, res) {
    dashboardController.buscarMaioresNotas(req, res);
});

router.get("/kpis/:idUsuario", function(req,res) {
    dashboardController.buscarKpis(req,res);
});

module.exports = router;