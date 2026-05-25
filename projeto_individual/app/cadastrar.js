 // Array para armazenar instrumento cadastradas para validação de código de ativação 

let listainstrumentoCadastradas = [];

    function salvarMetade(){
    let nomeVar = imp_user.value;
    let emailVar = imp_email.value;
    let senhaVar = imp_senha.value;
    let confirmacaoSenhaVar = imp_senhaconfirm.value;

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

    } else if (nomeVar.length <= 1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Nome com um ou menos caracteres)";
    finalizarAguardar();
    return false;

    } else if (emailVar.indexOf('@') == -1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Não contém arroba)";
    finalizarAguardar();
    return false;

    } else if (emailVar.indexOf('.') == -1) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Não contém .)";
    finalizarAguardar();
    return false;

    } else if (senhaVar.length <= 6) {
    cardErro.style.display = "block";
    cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
    mensagem_erro.innerHTML ="(Senha com 6 ou menos digitos)";
    finalizarAguardar();
    return false;

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

    
    
    fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
},
    body: JSON.stringify({
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        listasinstrumentoServer: instrumentoVar,

    }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

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
        }, "1500");

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

    function sumirMensagem() {
    cardErro.style.display = "none";
}

    function finalizarAguardar() {
}


