const paginasPraticaViola = [
    {
        pagina: 1,
        titulo: "A Viola de Arco",
        texto1: "A viola de arco é um instrumento de cordas friccionadas semelhante ao violino, porém maior e com sonoridade mais grave.",
        imagem: "https://acdn-us.mitiendanube.com/stores/006/539/932/products/viola_de_arco_tamanho_40_envelhecida_verniz_alto_brilho_rolim_modelo_orquestra_1a_1-93ed930ea19b91f9a717539717889420-1024-1024.webp"
    },
    {
        pagina: 2,
        titulo: "Função da Viola na Música",
        texto1: "A viola exerce um papel essencial na harmonia, ligando os sons graves aos agudos dentro de conjuntos musicais.",
        imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2026/03/AdobeStock_68805246-1-640x350.jpg"
    },
    {
        pagina: 3,
        titulo: "Cordas da Viola",
        texto1: "A viola possui quatro cordas afinadas em Dó, Sol, Ré e Lá, da mais grave para a mais aguda.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFX2UKFcc_ziTVcCy6AcGLlkazXTxvyQIl3lOrHYZ8jCiWZzM2Z5DNiw2pnfvZCyG6uH3TxpfoGqsWPRGocgNAkVJVXxLpFecJrGnbLV1vzT5NBl9yP_ArGfpWWwoJDf-SCFmQAU-9Qto/w1200-h630-p-k-no-nu/1.Componentes+da+Viola+-+Frente.bmp"
    },
    {
        pagina: 4,
        titulo: "Tamanho da Viola",
        texto1: "A viola não possui um tamanho padrão único, existindo variações para melhor adaptação ao corpo do músico.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpHAtzsFDmYsK-dK6rJGf5vAa9KX-XgPZZQ&s"
    },
    {
        pagina: 5,
        titulo: "Afinação da Viola",
        texto1: "A afinação correta da viola é fundamental para garantir boa sonoridade e precisão musical durante a execução.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjGzRv3yUf_GBymR_G1aF7c8oISeV2pq1Rw&s"
    },
    {
        pagina: 6,
        titulo: "Posição do Instrumento",
        texto1: "A viola é apoiada no ombro esquerdo e sustentada pelo queixo, permitindo liberdade de movimento das mãos.",
        imagem: "https://www.wikihow.com/images_en/thumb/1/1d/Play-Viola-Step-4.jpg/v4-459px-Play-Viola-Step-4.jpg"
    },
    {
        pagina: 7,
        titulo: "Uso do Arco na Viola",
        texto1: "O arco é responsável por produzir o som através da fricção com as cordas, exigindo controle e coordenação.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePE86mMh9Muad_IzxOAY_zUy7Y8--u8v6Zg&s"
    },
    {
        pagina: 8,
        titulo: "Importância do Estudo Diário",
        texto1: "O estudo regular da viola ajuda a desenvolver técnica, afinação e controle sonoro do instrumento.",
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
        if(index == paginasPraticaViola.length){
            index = 0;
        }
    paginacao(paginasPraticaViola)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasPraticaViola.length - 1;
        }
    paginacao(paginasPraticaViola)
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


/*Daqui para frente é o quiz */

    const listaDeQuestoes = [
    {
        pergunta: "O que diferencia a viola de arco do violino?",
        alternativaA: "O número de cordas",
        alternativaB: "O tipo de arco",
        alternativaC: "O tamanho maior e o som mais grave",
        alternativaD: "O uso exclusivo em solos",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a principal função da viola em conjuntos musicais?",
        alternativaA: "Executar apenas melodias agudas",
        alternativaB: "Substituir o violoncelo",
        alternativaC: "Conectar sons graves e agudos na harmonia",
        alternativaD: "Marcar o ritmo principal",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Quantas cordas possui a viola de arco?",
        alternativaA: "Três",
        alternativaB: "Quatro",
        alternativaC: "Cinco",
        alternativaD: "Seis",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual é a afinação correta das cordas da viola?",
        alternativaA: "Sol, Ré, Lá, Mi",
        alternativaB: "Ré, Sol, Lá, Mi",
        alternativaC: "Dó, Sol, Ré, Lá",
        alternativaD: "Lá, Ré, Sol, Dó",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Por que a viola não possui um tamanho padrão único?",
        alternativaA: "Por causa do tipo de madeira",
        alternativaB: "Para se adaptar melhor ao corpo do músico",
        alternativaC: "Por exigência da orquestra",
        alternativaD: "Por causa da afinação",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual é a posição correta para segurar a viola?",
        alternativaA: "Apoiada no joelho",
        alternativaB: "Suspensa pelo braço direito",
        alternativaC: "Apoiada no ombro esquerdo e sustentada pelo queixo",
        alternativaD: "Segurada horizontalmente",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a função do arco na viola?",
        alternativaA: "Afinar o instrumento",
        alternativaB: "Produzir o som ao friccionar as cordas",
        alternativaC: "Marcar o compasso",
        alternativaD: "Sustentar o instrumento",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual clave é mais utilizada na leitura musical da viola?",
        alternativaA: "Clave de Sol",
        alternativaB: "Clave de Fá",
        alternativaC: "Clave de Dó",
        alternativaD: "Clave de Percussão",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Por que o estudo diário é importante para o violista?",
        alternativaA: "Para trocar de instrumento",
        alternativaB: "Para tocar apenas músicas rápidas",
        alternativaC: "Para desenvolver técnica, afinação e controle sonoro",
        alternativaD: "Para aprender novas claves",
        alternativaCorreta: "alternativaC"
    }
]


const quantidadeDeQuestoes = listaDeQuestoes.length
let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
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
