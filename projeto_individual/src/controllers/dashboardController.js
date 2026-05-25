var dashboardModel = require("../models/dashboardModel");

function buscarMaioresNotas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario undefined");
    } else {
        dashboardModel.buscarMaioresNotas(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


module.exports = {
    buscarMaioresNotas
};