var quizModel = require("../models/quizModel");

function inserir(req, res) {
    console.log(req.body)
    var idusuario = req.body.idUsuario;
    var idquiz = req.body.idQuiz;
    var acertos = req.body.certas;
    var percentual = req.body.percentual;
    var tipo = req.body.tipoCurso;

    if (
        idusuario == undefined ||
        idquiz == undefined ||
        acertos == undefined ||
        percentual == undefined ||
        tipo == undefined
    ) {
        res.status(400).send("Algum dado está undefined");
    } else {
        quizModel.inserir(idusuario, idquiz, acertos, percentual, tipo)
            .then(function (resultado) {
                res.json({
                    mensagem: "Resultado do quiz inserido com sucesso!",
                    resultado: resultado
                });
            })
            .catch(function (erro) {
                console.log("Erro ao inserir resultado do quiz:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    inserir
};