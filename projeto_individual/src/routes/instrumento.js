var express = require("express");
var router = express.Router();

var instrumentoController = require("../controllers/instrumentoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/buscar/:id", function (req, res) {
  instrumentoController.buscarPorId(req, res);
});

router.get("/listaracessos/:idusuario", function (req, res) {
  instrumentoController.listadeacessos(req, res);
});

router.get("/listar", function (req, res) {
  instrumentoController.listar(req, res);
});

module.exports = router;