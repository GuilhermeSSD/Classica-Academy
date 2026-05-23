var database = require("../database/config");

function inserir(idusuario, idquiz, acertos, percentual, tipo) {
    var instrucaoSql = `
        INSERT INTO respostas
        (fk_idusuario, fk_idquiz, acertos, percentual)
        VALUES
        (${idusuario}, ${idquiz}, ${acertos}, ${percentual});
    `;

    console.log("Executando SQL:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir
};