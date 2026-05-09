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

//parte mexida
function listadeacessos(req,res){
  var id = req.idusuario
  
  instrumentoModel.acessoinstrumento(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}


module.exports = {
  buscarPorId,
  listar,
  listadeacessos,
};
