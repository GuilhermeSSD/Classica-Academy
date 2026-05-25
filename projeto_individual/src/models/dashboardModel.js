var database = require("../database/config");

function buscarMaioresNotas(idUsuario) {
    var instrucaoSql = `
        SELECT 
            i.nome AS instrumento,
            q.tipoCurso,
            MAX(r.percentual) AS maiorNota
        FROM respostas r
        JOIN quiz q ON r.fk_idquiz = q.idquiz
        JOIN instrumento i ON q.fk_instrumento = i.idinstrumento
        WHERE r.fk_idusuario = ${idUsuario}
        GROUP BY i.nome, q.tipoCurso;
    `;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMaioresNotas
};