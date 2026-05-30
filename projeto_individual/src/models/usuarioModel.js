var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idusuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function vincularInstrumento(idUsuario,Instumentos_selecionados) {
var instrucaoSql = `
        INSERT INTO usuario_instrumento (fk_idusuario, fk_instrumento) VALUES`;

    for (let index = 0; index < Instumentos_selecionados.length; index++) {
        let idInstrumento = Instumentos_selecionados[index];
        
        instrucaoSql += `(${idUsuario}, ${idInstrumento})`;

        if (index < Instumentos_selecionados.length - 1) {
            instrucaoSql += `, `;
        }
    }

    instrucaoSql += ';';

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    vincularInstrumento
};

