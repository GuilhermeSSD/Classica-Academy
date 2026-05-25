function ircad(){
    window.location.href ="cadastro.html";
}

    function entrar() {
        var emailVar = imp_email.value;
        var senhaVar = imp_senha.value;

        if (emailVar == "" || senhaVar == "") {
            cardErro.style.display = "block"
            mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
            finalizarAguardar();
            return false;
        }
        else {
            setInterval(sumirMensagem, 5000)
        }

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idusuario;
                    cardErro.style.display = "block";
                    cardErro.style.background = "linear-gradient(135deg, #00f519, #0b8c04)";
                    mensagem_erro.innerHTML =
                        "(carregando o curso disponiveis para o seu cadastro...)";

                    setTimeout(function () {

                        window.location = "/cursos_disponiveis.html";
                    }, 1000); 

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                cardErro.style.display = "block";
                cardErro.style.background = "linear-gradient(135deg, #dc2626, #b91c1c)";
                mensagem_erro.innerHTML ="(Login falho)";


                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

    function sumirMensagem() {
        cardErro.style.display = "none"
    }

    function finalizarAguardar(){}