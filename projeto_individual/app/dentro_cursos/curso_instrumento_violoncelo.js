const paginasPriaticaVioloncelo = [
    {
        pagina: 1,
        titulo: "O Violoncelo",
        texto1: "O violoncelo é um instrumento de cordas friccionadas, maior que a viola e o violino, com sonoridade grave e profunda.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurJc9vT-9UU16iRBe_2t3HPGElC8dcwPypQ&s"
    },
    {
        pagina: 2,
        titulo: "Função do Violoncelo",
        texto1: "O violoncelo tem a função de sustentar a base harmônica e melódica, podendo atuar tanto em linhas graves quanto em melodias.",
        imagem: "https://dicasdacapital.com.br/wp-content/uploads/2021/06/150178334485violoncelo_t_c.jpeg"
    },
    {
        pagina: 3,
        titulo: "Cordas do Violoncelo",
        texto1: "O violoncelo possui quatro cordas afinadas em Dó, Sol, Ré e Lá, da mais grave para a mais aguda.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_e9gI24fJmGm7bsmkrKb3oJ8QIUSNcJwJeA&s"
    },
    {
        pagina: 4,
        titulo: "Tamanho do Violoncelo",
        texto1: "O violoncelo possui tamanhos variados para atender músicos de diferentes idades e estaturas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVe4mZ2XaBGz9EnfYoZPOal-U3kzS2J2BGGw&s"
    },
    {
        pagina: 5,
        titulo: "Posição do Violoncelo",
        texto1: "O violoncelo é tocado apoiado no chão através do espigão e sustentado entre as pernas do músico.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlBWBjy6Y-i3w2U08gRQMc-Wh9t2asecxsw&s"
    },
    {
        pagina: 6,
        titulo: "Uso do Arco no Violoncelo",
        texto1: "O arco é utilizado para friccionar as cordas, sendo essencial o controle do peso e da velocidade para boa sonoridade.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kjBguch1aZhFE3omYQdT4AMtdfGUC3L_LqDpHQoI8QKLtsUj8lDyOu9fbil7mRIKVz3TO6XNV0T5z17L5eIClP09MJ3MHdRoPF1P6Fjz645rQEKNuF0hp7q6F_fCFwWmvse8viqlCzE/s1600/2,1.JPG"
    },
    {
        pagina: 7,
        titulo: "Afinação do Violoncelo",
        texto1: "A afinação correta do violoncelo é fundamental para garantir precisão sonora e boa execução musical.",
        imagem: "https://images.tcdn.com.br/img/img_prod/604952/micro_afinador_violoncelo_wittner_preto_e_dourado_2770_4_75f181dbe0e7bd318884c92b6989c7f9.png"
    },
    {
        pagina: 8,
        titulo: "Importância do Estudo Diário",
        texto1: "O estudo diário do violoncelo contribui para o desenvolvimento técnico, controle do arco e afinação.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-RKKe8notBtP4j9VzxwnMYtpblWLehXv9Q&s"
    }
]

let index = 0; 
const tituloPagina = document.getElementById("titulo_pagina");
const textoCurso = document.getElementById("texto_curso");
const imagem = document.getElementById("div_imagem");
const btn_finalizar = document.getElementById("terminar")

function paginacao(listaDesejada) {
    tituloPagina.innerHTML = `${listaDesejada[index].titulo} - 
    ${listaDesejada[index].pagina} `;
    textoCurso.innerHTML = listaDesejada[index].texto1;
    imagem.style.backgroundImage = `url('${listaDesejada[index].imagem}'`;
    
    if(listaDesejada[index].pagina == listaDesejada.length){
        btn_finalizar.style.display = "block"
    }else{
        btn_finalizar.style.display = "none"
    }

}

function mudar(marca){
    if(marca == 1){
        index ++;
        if(index == paginasPriaticaVioloncelo.length){
            index = 0;
        }
    paginacao(paginasPriaticaVioloncelo)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasPriaticaVioloncelo.length - 1;
        }
    paginacao(paginasPriaticaVioloncelo)
    }
}   


function irCursoInstrmunto(){
    let acessado = sessionStorage.getItem("cursoAcessado");
    if (acessado == "violino") {
        window.location = "/curso_intrumento_violino.html"
    } else if(acessado == "viola"){
        window.location = "/curso_intrumento_viola.html"
    }else if(acessado == "violoncelo"){
        window.location = "/curso_intrumento_violoncelo.html"
    }
}

function irLicoes(){
    let acessado = sessionStorage.getItem("cursoAcessado");
    if (acessado == "violino") {
        window.location = "/licaovio"
    } else if(acessado == "viola"){
        window.location = "/licaoviola"
    }else if(acessado == "violoncelo"){
        window.location = "/licaocelo"
    }
}


/*Daqui para frente é o quiz */
    const listaDeQuestoes = [
    {
        pergunta: "O que caracteriza o violoncelo em relação aos outros instrumentos de cordas friccionadas?",
        alternativaA: "Seu tamanho pequeno e som agudo",
        alternativaB: "Seu uso exclusivo em solos",
        alternativaC: "Seu tamanho maior e som grave",
        alternativaD: "Seu número maior de cordas",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a principal função do violoncelo em conjuntos musicais?",
        alternativaA: "Marcar o ritmo",
        alternativaB: "Executar apenas melodias agudas",
        alternativaC: "Sustentar a base harmônica e melódica",
        alternativaD: "Substituir a viola",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Quantas cordas possui o violoncelo?",
        alternativaA: "Três",
        alternativaB: "Quatro",
        alternativaC: "Cinco",
        alternativaD: "Seis",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual é a afinação correta das cordas do violoncelo?",
        alternativaA: "Sol, Ré, Lá, Mi",
        alternativaB: "Ré, Sol, Lá, Mi",
        alternativaC: "Dó, Sol, Ré, Lá",
        alternativaD: "Lá, Ré, Sol, Dó",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Como o violoncelo é posicionado para ser tocado?",
        alternativaA: "Apoiado no ombro",
        alternativaB: "Apoiado no colo",
        alternativaC: "Apoiado no chão com o espigão e entre as pernas",
        alternativaD: "Suspenso por uma correia",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a principal função do arco no violoncelo?",
        alternativaA: "Afinar o instrumento",
        alternativaB: "Produzir o som ao friccionar as cordas",
        alternativaC: "Marcar o compasso",
        alternativaD: "Sustentar o instrumento",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual clave é mais utilizada na leitura musical do violoncelo?",
        alternativaA: "Clave de Sol",
        alternativaB: "Clave de Dó",
        alternativaC: "Clave de Fá",
        alternativaD: "Clave de Percussão",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Por que a afinação correta do violoncelo é importante?",
        alternativaA: "Para aumentar o volume",
        alternativaB: "Para trocar de instrumento",
        alternativaC: "Para garantir precisão sonora",
        alternativaD: "Para mudar a clave",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Por que o estudo diário é essencial para o violoncelista?",
        alternativaA: "Para aprender novas escalas rapidamente",
        alternativaB: "Para tocar apenas músicas rápidas",
        alternativaC: "Para desenvolver técnica, afinação e controle do arco",
        alternativaD: "Para trocar de instrumento",
        alternativaCorreta: "alternativaC"
    }
]


let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
let percentual = 0

function finalizarCurso(){
    let curso = document.getElementById("escrita")
    let quiz = document.getElementById("quiz")
    curso.style.display = "none";
    quiz.style.display = "flex";
    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true)

    const questaoAtual = listaDeQuestoes[index]
    numeroDaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option"); 
    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnSubmeter.disabled = true
        btnProx.disabled = false
        habilitarAlternativas(false)
        checarResposta()
    }
}


function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true
    primeiraOpcao.disabled = opcaoEscolhida
    segundaOpcao.disabled = opcaoEscolhida
    terceiraOpcao.disabled = opcaoEscolhida
    quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
    btnProx.disabled = true
    btnSubmeter.disabled = false
    desmarcarRadioButtons()
    numeroDaQuestaoAtual++

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
    } else {
        finalizarJogo()
    }
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta 
    const options = document.getElementsByName("option"); 

    options.forEach((option) => {
        if (option.checked === true && option.value === respostaQuestaoAtual) {
            pontuacaoFinal++
            certas++  
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            tentativaIncorreta++
            erradas++
        }
    })
}


function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function finalizarJogo() {
    btnVerResultado.disabled = false
    btnProx.disabled = true
    btnSubmeter.disabled = true

}

function mostrarResultados(){
    document.getElementById("resultados").style.display = "flex";
    document.getElementById("quiz").style.display = "none";
    let mostrarErros = document.getElementById("erros").innerHTML
    let mostrarAcertos= document.getElementById("acertos").innerHTML

    percentual = (certas/quantidadeDeQuestoes)*100;
    let mensagem = ""
    if(percentual <= 10){
        mensagem = "Você é um iniciante na pratica musical"
    }else if(percentual <= 25){
        mensagem = "Você já é um iniciante com uma exelente desempenho"
    }else if(percentual <= 50){
        mensagem = "Você ja tem dominio razoavel de seu instrumento"
    }else if(percentual <= 75){
        mensagem = "Você já pode tocar em uma orquestra para jonvens"
    }else if(percentual <= 100){
        mensagem = "Você ja tem um conhecimento alto sobre o seu instrumento e já pode ir para a oficialização"
    }

    document.getElementById("pontuacaoFinal").innerHTML  = `Seu percentual de acertos foi:${percentual}%`;
    document.getElementById("textoParaMensagemFinal").innerHTML = `${mensagem}`;
    document.getElementById("acertos").innerHTML = `Você acertou ${certas} questões`;
    document.getElementById("erros").innerHTML = `Você errou ${erradas} questões`;
    salvarResultadoQuiz();
}


function salvarResultadoQuiz() {
    let idUsuario = sessionStorage.getItem("ID_USUARIO");
    let tipoCurso = "Pratico";
    let quizCorrespondente;

    if (sessionStorage.getItem("cursoAcessado") == "violino" && tipoCurso == "Pratico") {
        quizCorrespondente = 4;
    } else if (sessionStorage.getItem("cursoAcessado") == "viola" && tipoCurso == "Pratico") {
        quizCorrespondente = 5;
    } else if (sessionStorage.getItem("cursoAcessado") == "violoncelo" && tipoCurso == "Pratico") {
        quizCorrespondente = 6;
    }

    let idQuiz = quizCorrespondente; 

    fetch("/quiz/inserir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario,
            idQuiz: idQuiz,
            certas: certas,
            percentual: percentual,
            tipoCurso: tipoCurso
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            console.log("Resposta salva :)");
        }
    })
    .catch(erro => {
        console.error(erro);
    });
}
