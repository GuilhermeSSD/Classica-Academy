
let paginasTeoriaViola = [
{
    pagina: 1,
    titulo: "Figuras Musicais",
    texto1: "A duração do som na música é representada pelas figuras musicais. Cada figura indica quanto tempo uma nota deve ser sustentada durante a execução.",
    imagem: "https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2025/05/381ef36-Figuras-musicais-e-pausas-1024x667.png",
    texto2: "As figuras mais comuns são: semibreve, mínima, semínima, colcheia e semicolcheia. Cada uma possui um valor de duração específico."
},
{
    pagina: 2,
    titulo: "Notas Musicais",
    texto1: "A nota musical é o símbolo gráfico que representa um som. Ela indica tanto a altura quanto a duração do som.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Music-notes.svg",
    texto2: "No instrumento, a nota ganha vida quando a figura musical é executada respeitando seu valor rítmico."
},
{
    pagina: 3,
    titulo: "Pausas Musicais",
    texto1: "Assim como o som tem duração, o silêncio também é parte essencial da música. As pausas representam o tempo em que nenhum som é produzido.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Musical_rests.svg",
    texto2: "Cada pausa corresponde exatamente ao valor de uma figura musical, mantendo o equilíbrio do ritmo."
},
{
    pagina: 4,
    titulo: "Ritmo Musical",
    texto1: "O ritmo é a organização do tempo na música. Ele surge da combinação entre notas e pausas ao longo da execução.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Rhythm_example.png",
    texto2: "Manter o ritmo correto é fundamental para tocar junto com outros músicos ou acompanhar um metrônomo."
},
{
    pagina: 5,
    titulo: "Aplicação Prática",
    texto1: "Ao estudar figuras musicais, é importante praticar lentamente, contando o tempo de cada nota e pausa.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Metronome.jpg",
    texto2: "Essa prática ajuda a desenvolver precisão rítmica e segurança na execução musical."
},
{
    pagina: 6,
    titulo: "Valores das Figuras Musicais",
    texto1: "Cada figura musical possui um valor de duração específico. Esses valores são sempre proporcionais entre si.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Note_durations.svg",
    texto2: "Por exemplo, uma mínima dura o dobro de uma semínima, enquanto duas colcheias ocupam o mesmo tempo de uma semínima."
},
{
    pagina: 7,
    titulo: "Relação entre Notas e Pausas",
    texto1: "Para cada figura musical existe uma pausa correspondente com o mesmo valor de tempo.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Music_rests_and_notes.png",
    texto2: "Essa relação garante que o ritmo continue correto mesmo quando há silêncio na música."
},
{
    pagina: 8,
    titulo: "Contagem Musical",
    texto1: "A contagem musical ajuda o músico a manter o tempo correto durante a execução.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Music_counting_example.png",
    texto2: "É comum contar mentalmente usando números, como: 1, 2, 3, 4, respeitando o valor de cada figura."
},
{
    pagina: 9,
    titulo: "Compassos",
    texto1: "O compasso organiza a música em grupos regulares de tempos, facilitando a leitura e execução.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Music_time_signatures.svg",
    texto2: "A fórmula de compasso indica quantos tempos existem em cada compasso e qual figura representa um tempo."
},
{
    pagina: 10,
    titulo: "Pulso Musical",
    texto1: "O pulso é a batida regular que sentimos na música, semelhante ao bater do coração.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/7/75/Music_pulse_diagram.png",
    texto2: "Mesmo quando não há som, o pulso continua sendo contado internamente pelo músico."
},
{
    pagina: 11,
    titulo: "Uso do Metrônomo",
    texto1: "O metrônomo é uma ferramenta usada para manter um tempo constante durante o estudo musical.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Metronome.jpg",
    texto2: "Praticar com metrônomo ajuda a desenvolver precisão rítmica e controle do tempo."
},
{
    pagina: 12,
    titulo: "Leitura Rítmica",
    texto1: "A leitura rítmica consiste em interpretar corretamente as figuras e pausas escritas na partitura.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rhythm_reading_example.png",
    texto2: "Esse tipo de leitura pode ser treinado batendo palmas ou marcando o tempo antes de tocar o instrumento."
}
]

let index = 0; 
let tituloPagina = document.getElementById("titulo_pagina");
let textoCurso = document.getElementById("texto_curso");
let imagem = document.getElementById("div_imagem");
let texto2Curso = document.getElementById("texto2_curso");
let btn_finalizar = document.getElementById("terminar")


function paginacao(listaDesejada) {
    tituloPagina.innerHTML = `${listaDesejada[index].titulo} - 
    ${listaDesejada[index].pagina} `;
    textoCurso.innerHTML = listaDesejada[index].texto1;
    texto2Curso.innerHTML = listaDesejada[index].texto2;
    imagem.style.backgroundImage = `url('${listaDesejada[index].imagem}'`;
    
    if(listaDesejada[index].pagina == 12){
        btn_finalizar.style.display = "block"
    }else{
        btn_finalizar.style.display = "none"
    }

}

function mudar(marca){
    if(marca == 1){
        index ++;
        if(index == paginasTeoriaViola.length){
            index = 0;
        }
    paginacao(paginasTeoriaViola)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasTeoriaViola.length - 1;
        }
    paginacao(paginasTeoriaViola)
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

//ir para a lição de cada instrumento
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
            pergunta: "Qual mês tem 30 dias?",
            alternativaA: "Janeiro",
            alternativaB: "Dezembro",
            alternativaC: "Junho",
            alternativaD: "Agosto",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Quantas horas tem em um dia?",
            alternativaA: "30 horas",
            alternativaB: "38 horas",
            alternativaC: "48 horas",
            alternativaD: "24 horas",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Qual destes números é ímpar?",
            alternativaA: "Dez",
            alternativaB: "Doze",
            alternativaC: "Oito",
            alternativaD: "Onze",
            alternativaCorreta: "alternativaD"
        }
    ]


// variáveis globais    
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

    // verifica se resposta assinalada é correta
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
        mensagem = "Vc ainda não domina teoria musical"
    }else if(percentual <= 25){
        mensagem = "vc tem dominio basico de teoria mmusical"
    }else if(percentual <= 50){
        mensagem = "vc ja tem dominio suficiente para começar o instrumento"
    }else if(percentual <= 75){
        mensagem = "vc tem um bom conhecimento em teoria musical :)"
    }else if(percentual <= 100){
        mensagem = "vc ja tem um exelente dominio em teoria musical, agora se concentra no instrumento"
    }

    document.getElementById("pontuacaoFinal").innerHTML  = `Seu percentual de acertos foi:${percentual}%`;
    document.getElementById("textoParaMensagemFinal").innerHTML = `${mensagem}`;
    document.getElementById("acertos").innerHTML = `Você acertou ${certas} questões`;
    document.getElementById("erros").innerHTML = `Você errou ${erradas} questões`;
    salvarResultadoQuiz();
}


function salvarResultadoQuiz() {
    let idUsuario = sessionStorage.getItem("ID_USUARIO");
    let tipoCurso = "Teoria";
    let fkinstrumento;
    if (sessionStorage.getItem("cursoAcessado") == "violino") {
        fkinstrumento = 1;
    } else if (sessionStorage.getItem("cursoAcessado") == "viola") {
        fkinstrumento = 2;
    } else if (sessionStorage.getItem("cursoAcessado") == "violoncelo") {
        fkinstrumento = 3;
    }

    let idQuiz = fkinstrumento; 

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
            console.log("Resultado do quiz salvo com sucesso");
        } else {
            console.log("Erro ao salvar resultado");
        }
    })
    .catch(erro => {
        console.error("Erro no fetch:", erro);
    });
}
