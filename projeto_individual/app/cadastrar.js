 // Array para armazenar instrumento cadastradas para validação de código de ativação 

let listainstrumentoCadastradas = [];

    function salvarMetade(){
    let nomeVar = imp_user.value;
    let emailVar = imp_email.value;
    let senhaVar = imp_senha.value;
    let confirmacaoSenhaVar = imp_senhaconfirm.value;

    //Verifica se todos os campos estão em brancos
    if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
    ) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";

    mensagem_erro.innerHTML ="(Mensagem de erro para todos os campos em branco)";

    finalizarAguardar();
    return false;

      //Verificando se o nome é maior ou igual a um caractere
    } else if (nomeVar.length <= 1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Nome com um ou menos caracteres)";
    finalizarAguardar();
    return false;

      //Verificando se há algum @ no email
    } else if (emailVar.indexOf('@') == -1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Não contém arroba)";
    finalizarAguardar();
    return false;

      //Verificando se há algum . no email
    } else if (emailVar.indexOf('.') == -1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Não contém .)";
    finalizarAguardar();
    return false;

      //Verificando se a senha é maior ou igual a 6 caracteres 
    } else if (senhaVar.length <= 6) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Senha com 6 ou menos digitos)";
    finalizarAguardar();
    return false;

      //Verificando se a senha e a confirmacão são iguais
    } else if (senhaVar != confirmacaoSenhaVar) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Não é igual a senha)";
    finalizarAguardar();
    return false;}
    else{

        sessionStorage.setItem("userTemp", imp_user.value);
        sessionStorage.setItem("emailTemp", imp_email.value);
        sessionStorage.setItem("senhaTemp", imp_senha.value);
        sessionStorage.setItem("senhaConfirmTemp", imp_senhaconfirm.value);

        cardErro.style.display = "block";
        cardErro.style.background = "linear-gradient(135deg, #26dc35, #538f09)";
        mensagem_erro.innerHTML ="Salvando alterações! redirecionando para instrumentos...";

        setTimeout(function () {
        primeira_parte.style.display = "none"
        segunda_parte.style.display = "flex"
                    }, 900);
        
    }
}



    function cadastrar(){
    let listaInstrumentosMarcadas = [];

    let violino = document.getElementById("inp_violino");
    let viola = document.getElementById("inp_Viola");
    let violoncelo = document.getElementById("inp_Violoncelo");
    // aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo


    if (violino.checked) {
    listaInstrumentosMarcadas.push("1");
} 
    if (viola.checked) {
    listaInstrumentosMarcadas.push("2");
} 
    if (violoncelo.checked) {
    listaInstrumentosMarcadas.push("3");
} 


    let nomeVar = sessionStorage.getItem("userTemp");
    let emailVar = sessionStorage.getItem("emailTemp");
    let senhaVar = sessionStorage.getItem("senhaTemp");
    let instrumentoVar = listaInstrumentosMarcadas;

    
    
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
},
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        listasinstrumentoServer: instrumentoVar,

    }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        // exibir 2a parte do formulário
        // ao cadastrar a conta, já seleciona os instrumentos e usa o ID cadastrado na conta, para vincular TODOS os instrumentos

        if (resposta.ok) {
        sessionStorage.removeItem("userTemp");
        sessionStorage.removeItem("emailTemp");
        sessionStorage.removeItem("senhaTemp");

        cardErro.style.display = "block";
        cardErro.style.background = "linear-gradient(135deg, #26dc35, #538f09)";
        mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
            window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
        } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

  // Listando instrumentos cadastradas 
    function listar() {
        fetch("/instrumento/listar", {
        method: "GET",
})
    .then(function (resposta) {
        resposta.json().then((instrumento) => {

        listainstrumentoCadastradas = [];

        instrumento.forEach((instrumento) => {
        listainstrumentoCadastradas.push(instrumento);

        console.log(listainstrumentoCadastradas);
        });
    });
    })
    .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    });
}

  //função para remover os modais
    function sumirMensagem() {
    cardErro.style.display = "none";
}

    function finalizarAguardar() {
}


