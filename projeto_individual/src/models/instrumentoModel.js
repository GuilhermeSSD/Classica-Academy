var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT idinstrumento, nome
        FROM instrumento;
    `;
    return database.executar(instrucaoSql);
}

// verifica os ids dos instrumentos que o usuario tem acesso
function acessoinstrumento(idUsuario) {
    var instrucaoSql = `
    SELECT fk_instrumento FROM usuario_instrumento WHERE fk_idusuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    acessoinstrumento
};