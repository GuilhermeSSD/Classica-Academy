var instrumentoModel = require("../models/instrumentoModel");

function listar(req, res) {
  instrumentoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  instrumentoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}


module.exports = {
  buscarPorId,
  listar,
};
