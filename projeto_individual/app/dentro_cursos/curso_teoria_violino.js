const paginasTeoriaViolino = [
{
    pagina: 1,
    titulo: "Figuras Musicais",
    texto1: "A duração do som na música é representada pelas figuras musicais. Cada figura indica quanto tempo uma nota deve ser sustentada durante a execução.",
    imagem: "https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2025/05/381ef36-Figuras-musicais-e-pausas-1024x667.png",
    texto2: "As figuras mais comuns são: semibreve, mínima, semínima, colcheia e semicolcheia. Cada uma possui um valor de duração específico."
},
{
    pagina: 2,
    titulo: "Clave de sol",
    texto1: "O instrumento violino utiliza a cave de sol que tem sua escala a seguinte:",
    imagem: "https://i.pinimg.com/736x/e9/0d/44/e90d44964c503706b746f68fef077f64.jpg",
    texto2: "No instrumento, a nota ganha vida quando a figura musical é executada respeitando seu valor rítmico."
},
{
    pagina: 3,
    titulo: "Pausas Musicais",
    texto1: "Cada Figura muisacal tem a sua respectiva pausa, que segue suas propriedas e valor.",
    imagem: "https://diulylovatto.com/blog/wp-content/uploads/2025/03/2.png",
    texto2: "Ou seja se a seminima vale um tempo em uma musica 4/4 a sua respectiva pausa tambem tem um tempo em um compaso 4/4."
},
{
    pagina: 4,
    titulo: "Compaso",
    texto1: "É a divisão de um trecho musical em séries regulares de tempos.",
    imagem: "https://i.ytimg.com/vi/1IZZzkem__Q/maxresdefault.jpg",
    texto2: "Existe o compaso quaternario que divide as notas a cada 4, o ternário que divide as notas a cada 3 e o binario que divide as notas a cada 2."
},
{
    pagina: 5,
    titulo: "Formula de compaso",
    texto1: "A fórmula de compasso define a quantidade de tempos dentro de um compasso, bem como a figura musical que representa cada tempo,pulso ou movimento.",
    imagem: "https://i.ytimg.com/vi/eNZipDuG3mU/maxresdefault.jpg",
    texto2: "A quantidade de tempos ou pulsos é representada pelo número superior e a figura musical que equivale a um tempo ou pulso é representado pelo numero inferior."
},
{
    pagina: 6,
    titulo: "Tipos de leitura",
    texto1: "Leitura rítimica: Falar a sílaba 'TA', executando no ritimo das figuras;\n Leitura métrica: Falar o nome da nota, mas sem cantar, e executando no ritimo das figuras;\n Sofejo: Cantar as notas na altura correspondente dentro do padrao rítimico da musica.",
    imagem: "https://i.ytimg.com/vi/r7YJ-b-UIYw/sddefault.jpg?v=6986088a",
    texto2: ""
},
{
    pagina: 7,
    titulo: "Movimento de condução",
    texto1: "São gestos visuais usados para representar a pulsasão do compasso, cada compasso tem o seu respectivo movimento.",
    imagem: "https://msaccb.com.br/templates/img/solfejo-em-4.png",
    texto2: "O mivimento apresentado da figura é o movimento 4/4 existem muitos outros e recomendo da uma pesquisada no restante."
},
{
    pagina: 8,
    titulo: "Ligadura",
    texto1: "A ligadura é uma linha curva que se coloca acima ou abaixo de dias ou mais notas e indica que o som deve se estender de uma nota para a outra.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwD8H6XuIO21AfHdYQ0VqPp9PJQOupRtniw&s",
    texto2: "Falando de uma forma mais clara, ela basicamente junta duas ou mais notas e as tornam com uma."
},
{
    pagina: 9,
    titulo: "Escala mais famosa",
    texto1: "A escala mais famosa do violino é a escala de LÁ MAIOR por se encaixar intuitivamente no formato natural da mão esquerda.",
    imagem: "https://bigunha.com/wp-content/uploads/2013/12/escala-la-maior-no-violino.png",
    texto2: "A escala completa consistem em basicamente em subir a escala até a nota maxima e desela até a nota minima da escala, isso repetidamente."
},
{
    pagina: 10,
    titulo: "Acidentes da musica",
    texto1: "Na musica nós temos como acidentes basicos o bemol e o sustenido que respectivamente em diminuir e aumentar um semiton na nota cuja esta mais proxima",
    imagem: "https://i.pinimg.com/474x/f5/f8/a1/f5f8a126834d9c8254460c5dab81e134.jpg",
    texto2: "Existem outros acidentes como o esquadro que retira um acidente nativo,proem eles não serão abordados nesse curso."
},
{
    pagina: 11,
    titulo: "Uso do Metrônomo",
    texto1: "O metrônomo é uma ferramenta usada para manter um tempo constante durante o estudo musical.",
    imagem: "https://blog.fritzdobbert.com.br/wp-content/uploads/2016/12/Metronomo.jpg",
    texto2: "Praticar com metrônomo ajuda a desenvolver precisão rítmica e controle do tempo.(dica\; no gogle tem um metrono digital gratis para auxiliar nos estudos musicais)"
}
]

let index = 0; 
const tituloPagina = document.getElementById("titulo_pagina");
const textoCurso = document.getElementById("texto_curso");
const imagem = document.getElementById("div_imagem");
const texto2Curso = document.getElementById("texto2_curso");
const btn_finalizar = document.getElementById("terminar")

function paginacao(listaDesejada) {
    tituloPagina.innerHTML = `${listaDesejada[index].titulo} - 
    ${listaDesejada[index].pagina} `;
    textoCurso.innerHTML = listaDesejada[index].texto1;
    texto2Curso.innerHTML = listaDesejada[index].texto2;
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
        if(index == paginasTeoriaViolino.length){
            index = 0;
        }
    paginacao(paginasTeoriaViolino)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasTeoriaViolino.length - 1;
        }
    paginacao(paginasTeoriaViolino)
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
            pergunta: "Qual a Clave do seu instrumento",
            alternativaA: "Clave de Dó",
            alternativaB: "Clave de Fá",
            alternativaC: "Clave de SOL",
            alternativaD: "Clave de bemol",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Na clave do seu instrumento qual nota fica na linha 3",
            alternativaA: "nota Mi",
            alternativaB: "nota Si",
            alternativaC: "nota Fá",
            alternativaD: "nota Sol",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "Qual a figura musical que tem o maior valor",
            alternativaA: "Semibreve",
            alternativaB: "Seminima",
            alternativaC: "Colcheia",
            alternativaD: "Semifusa",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "Qual a função de um sustenido",
            alternativaA: "Aumentar a duração de uma nota",
            alternativaB: "Diminuir o tom de uma nota",
            alternativaC: "Aumentar o tem de uma nota",
            alternativaD: "Aumentar um semitom de uma nota",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "O que é solfejo?",
            alternativaA: "Falar o nome das notas sem cantar",
            alternativaB: "Executar apenas o ritmo",
            alternativaC: "Cantar as notas respeitando a altura e o ritmo",
            alternativaD: "Bater palmas no tempo",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Qual a função da ligadura na música?",
            alternativaA: "Separar notas",
            alternativaB: "Diminuir o som",
            alternativaC: "Unir duas ou mais notas em um único som",
            alternativaD: "Aumentar o volume",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Qual é a escala mais famosa no violino?",
            alternativaA: "Escala de Dó Maior",
            alternativaB: "Escala de Sol Maior",
            alternativaC: "Escala de Ré Maior",
            alternativaD: "Escala de Lá Maior",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual a função do sustenido na música?",
            alternativaA: "Diminuir um tom",
            alternativaB: "Aumentar um tom",
            alternativaC: "Aumentar um semitom",
            alternativaD: "Cancelar um acidente",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Para que serve o metrônomo?",
            alternativaA: "Afinar o instrumento",
            alternativaB: "Ajudar na leitura de notas",
            alternativaC: "Manter o tempo constante",
            alternativaD: "Aumentar a velocidade da música",
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
        mensagem = "Você ainda não domina teoria musical"
    }else if(percentual <= 25){
        mensagem = "Você tem dominio basico de teoria mmusical"
    }else if(percentual <= 50){
        mensagem = "Você ja tem dominio suficiente para começar o instrumento"
    }else if(percentual <= 75){
        mensagem = "Você tem um bom conhecimento em teoria musical :)"
    }else if(percentual <= 100){
        mensagem = "Você ja tem um exelente dominio em teoria musical, agora se concentra no instrumento"
    }

    document.getElementById("pontuacaoFinal").innerHTML  = `Seu percentual de acertos foi:${percentual.toFixed(2)}%`;
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
        } 
    })
    .catch(erro => {
        console.error("Erro no fetch:", erro);
    });
}
