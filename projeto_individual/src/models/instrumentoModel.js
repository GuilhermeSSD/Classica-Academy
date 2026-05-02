var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT idinstrumento, nome
        FROM instrumento;
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome) {
    var instrucaoSql = `
        INSERT INTO instrumento (nome)
        VALUES ('${nome}');
    `;
    return database.executar(instrucaoSql);
}

function vincularUsuario(idUsuario, idInstrumento) {
    var instrucaoSql = `
        INSERT INTO usuario_instrumento (fk_idusuario, fk_instrumento)
        VALUES (${idUsuario}, ${idInstrumento});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    vincularUsuario
};