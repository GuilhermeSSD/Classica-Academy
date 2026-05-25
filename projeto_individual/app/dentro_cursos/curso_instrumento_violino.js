const paginasPriaticaViolino = [
    {
        pagina: 1,
        titulo: "Conhecendo o Violino",
        texto1: "O violino é um instrumento de cordas friccionadas, tocado com o auxílio do arco. Ele possui quatro cordas afinadas em Sol, Ré, Lá e Mi, da mais grave para a mais aguda.",
        imagem: "https://i0.wp.com/paracambi.rj.gov.br/sites/villa-lobos/wp-content/uploads/sites/3/2022/03/Violino.jpg?resize=275%2C300&ssl=1"
    },
    {
        pagina: 2,
        titulo: "Partes do Violino",
        texto1: "As principais partes do violino são: caixa de ressonância, espelho, cravelhas, estandarte, cavalete e queixeira. Cada parte influencia diretamente na sonoridade do instrumento.",
        imagem: "https://www.encorda.com.br/wp-content/uploads/2019/12/partes-do-violino-final-2-.jpg"
    },
    {
        pagina: 3,
        titulo: "Postura Correta",
        texto1: "A postura correta no violino envolve manter o instrumento apoiado entre o ombro e o queixo, com a coluna ereta e os braços relaxados para evitar tensão e lesões.",
        imagem: "https://static.wixstatic.com/media/92a30e_88f5d3d774094358b52bfb62fa5142a6~mv2.jpeg/v1/fill/w_960,h_1280,al_c,q_85,enc_avif,quality_auto/92a30e_88f5d3d774094358b52bfb62fa5142a6~mv2.jpeg"
    },
    {
        pagina: 4,
        titulo: "Empunhadura do Arco",
        texto1: "O arco deve ser segurado com leveza, utilizando os dedos de forma curvada. O polegar fica levemente dobrado, garantindo controle e flexibilidade no movimento.",
        imagem: "https://m.media-amazon.com/images/I/51V+dytVJuL._AC_UF350,350_QL80_.jpg"
    },
    {
        pagina: 5,
        titulo: "Afinação do Violino",
        texto1: "A afinação do violino pode ser feita pelas cravelhas ou pelos microafinadores. É essencial afinar corretamente antes de iniciar a prática para garantir um bom ouvido musical.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVcaGWmILbnXXDoPkqW25LSYyvyf9xHUJBw&s"
    },
    {
        pagina: 6,
        titulo: "Posição da Mão Esquerda",
        texto1: "A mão esquerda deve ficar relaxada, com o polegar apoiado levemente no braço do violino. Os dedos pressionam as cordas com precisão para produzir notas limpas.",
        imagem: "https://i.ytimg.com/vi/Y0JU7WRfp38/maxresdefault.jpg"
    },
    {
        pagina: 7,
        titulo: "Cordas do Violino",
        texto1: "O violino possui quatro cordas afinadas em intervalos de quinta justa, sendo elas da mais grave para a mais aguda, as cordas são: Sol, Ré, Lá e Mi.",
        imagem: "https://files.passeidireto.com/b49eb6a1-ac54-46f6-81ed-0c4ac4d2137a/bg6.png",
    },
    {
        pagina: 8,
        titulo: "Cuidados com o Instrumento",
        texto1: "Após tocar, é importante limpar o violino para remover o excesso de breu. Guardar o instrumento corretamente aumenta sua durabilidade e preserva a sonoridade.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqivcaxDqqx7Af82PUSEcHek5OxbCaTnv3g&s"
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
        if(index == paginasPriaticaViolino.length){
            index = 0;
        }
    paginacao(paginasPriaticaViolino)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasPriaticaViolino.length - 1;
        }
    paginacao(paginasPriaticaViolino)
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
        pergunta: "Quantas cordas possui o violino?",
        alternativaA: "Três cordas",
        alternativaB: "Quatro cordas",
        alternativaC: "Cinco cordas",
        alternativaD: "Seis cordas",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Quais são as cordas do violino da mais grave para a mais aguda?",
        alternativaA: "Mi, Lá, Ré e Sol",
        alternativaB: "Sol, Ré, Lá e Mi",
        alternativaC: "Dó, Sol, Ré e Lá",
        alternativaD: "Lá, Ré, Sol e Mi",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Qual peça do violino transmite a vibração das cordas para a caixa de ressonância?",
        alternativaA: "Cravelha",
        alternativaB: "Espelho",
        alternativaC: "Cavalete",
        alternativaD: "Queixeira",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Onde o violino deve ser apoiado corretamente?",
        alternativaA: "No colo",
        alternativaB: "No braço direito",
        alternativaC: "Entre o ombro e o queixo",
        alternativaD: "Somente na mão esquerda",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a função das cravelhas no violino?",
        alternativaA: "Sustentar o arco",
        alternativaB: "Afinar as cordas",
        alternativaC: "Produzir o som",
        alternativaD: "Apoiar o queixo",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Como deve ser o movimento correto do arco no violino?",
        alternativaA: "Circular",
        alternativaB: "Diagonal ao cavalete",
        alternativaC: "Reto e paralelo ao cavalete",
        alternativaD: "Somente para cima",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual é a função do breu utilizado no arco do violino?",
        alternativaA: "Afinar o instrumento",
        alternativaB: "Lubrificar as cordas",
        alternativaC: "Aumentar o atrito entre arco e corda",
        alternativaD: "Proteger a madeira",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Como deve ficar o polegar da mão esquerda ao tocar violino?",
        alternativaA: "Totalmente esticado",
        alternativaB: "Pressionando com força o braço",
        alternativaC: "Relaxado e apoiado levemente",
        alternativaD: "Escondido atrás do braço",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "Qual cuidado é recomendado após tocar violino?",
        alternativaA: "Guardar sem limpar",
        alternativaB: "Apertar mais as cordas",
        alternativaC: "Limpar o excesso de breu do instrumento",
        alternativaD: "Deixar o arco esticado",
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
