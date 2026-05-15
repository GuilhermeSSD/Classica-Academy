// Vetor para armazenar as paginas de teoria
let paginasTeoria = [
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


// vetor abaixo: tem o conteudo das paginas de violino
let paginasViolino = [
{
    pagina: 1,
    titulo: "Conhecendo o Violino",
    texto1: "O violino é um instrumento musical de cordas friccionadas, conhecido pelo seu som expressivo e brilhante. Ele é utilizado em orquestras, músicas clássicas, populares e até modernas.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Violin_VL100.png",
    texto2: "O som do violino é produzido quando o arco desliza sobre as cordas, fazendo-as vibrar e transmitindo o som pelo corpo do instrumento."
},
{
    pagina: 2,
    titulo: "Partes do Violino",
    texto1: "O violino possui várias partes importantes como voluta, cravelhas, espelho, cavalete, efes, estandarte e queixeira.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/7/73/Violin_parts.png",
    texto2: "Cada peça possui uma função essencial para a afinação, sustentação das cordas e qualidade sonora do instrumento."
},
{
    pagina: 3,
    titulo: "As Cordas do Violino",
    texto1: "O violino possui quatro cordas afinadas em intervalos de quinta: SOL, RÉ, LÁ e MI.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/20/Violin_strings.jpg",
    texto2: "A corda SOL produz sons mais graves, enquanto a corda MI produz os sons mais agudos do instrumento."
},
{
    pagina: 4,
    titulo: "O Arco",
    texto1: "O arco é utilizado para produzir o som no violino. Ele é composto por vareta, crina, talão, parafuso e ferrulho.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/42/Violin_bow.jpg",
    texto2: "A crina do arco entra em contato com as cordas e, com ajuda do breu, gera atrito suficiente para produzir vibração e som."
},
{
    pagina: 5,
    titulo: "O Breu",
    texto1: "O breu é uma resina aplicada na crina do arco para aumentar o atrito entre o arco e as cordas.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Violin_rosin.jpg",
    texto2: "Sem o breu, o arco desliza nas cordas sem produzir um som adequado. O excesso também pode prejudicar a sonoridade."
},
{
    pagina: 6,
    titulo: "Como Segurar o Violino",
    texto1: "O violino deve ficar apoiado entre o ombro e o queixo, mantendo postura confortável e equilibrada.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Violin_posture.jpg",
    texto2: "Uma postura correta ajuda na execução das notas, evita dores musculares e melhora o controle do instrumento."
},
{
    pagina: 7,
    titulo: "Como Segurar o Arco",
    texto1: "A mão direita segura o arco de maneira leve e flexível. Cada dedo possui uma posição específica.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Violin_bow_hold.jpg",
    texto2: "Uma pegada correta permite maior controle do som, dinâmica e suavidade nos movimentos."
},
{
    pagina: 8,
    titulo: "Afinação do Violino",
    texto1: "A afinação é feita utilizando as cravelhas e os microafinadores localizados no estandarte.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Violin_tuning_pegs.jpg",
    texto2: "As cordas devem ser afinadas em SOL, RÉ, LÁ e MI. Afinar corretamente é essencial para tocar músicas de forma agradável."
},
{
    pagina: 9,
    titulo: "O Cavalete",
    texto1: "O cavalete sustenta as cordas e transmite suas vibrações para o corpo do violino.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Violin_bridge.jpg",
    texto2: "Ele deve ficar centralizado entre os efes e na posição correta para garantir boa sonoridade."
},
{
    pagina: 10,
    titulo: "Posição dos Dedos",
    texto1: "Os dedos da mão esquerda pressionam as cordas sobre o espelho para produzir diferentes notas.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Violin_fingering_chart.png",
    texto2: "A precisão na posição dos dedos influencia diretamente na afinação e qualidade do som."
},
{
    pagina: 11,
    titulo: "Notas Musicais no Violino",
    texto1: "Cada corda permite tocar várias notas dependendo da posição dos dedos.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Music-notes.svg",
    texto2: "Com o estudo das escalas, o violinista aprende a localizar corretamente cada nota no instrumento."
},
{
    pagina: 12,
    titulo: "Escalas Musicais",
    texto1: "As escalas são exercícios fundamentais para desenvolver afinação, coordenação e memória musical.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Scale_music_example.png",
    texto2: "Praticar escalas diariamente ajuda o violinista a tocar com mais segurança e fluidez."
},
{
    pagina: 13,
    titulo: "Leitura de Partitura",
    texto1: "A partitura é a escrita musical utilizada para representar notas, ritmos e expressões musicais.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sheet_music_example.png",
    texto2: "Aprender leitura musical facilita tocar músicas novas e compreender melhor a teoria musical."
},
{
    pagina: 14,
    titulo: "Ritmo e Pulsação",
    texto1: "O ritmo organiza os sons no tempo e é essencial para manter a música equilibrada.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Metronome.jpg",
    texto2: "Treinar com metrônomo ajuda no desenvolvimento da precisão rítmica e controle da execução."
},
{
    pagina: 15,
    titulo: "Cuidados com o Violino",
    texto1: "O violino deve ser mantido limpo, protegido da umidade e guardado corretamente no estojo.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Violin_case.jpg",
    texto2: "Limpar o excesso de breu e afrouxar o arco após o uso ajudam a conservar o instrumento por muitos anos."
},
{
    pagina: 16,
    titulo: "Troca de Cordas",
    texto1: "As cordas se desgastam com o tempo e precisam ser substituídas periodicamente.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/29/Violin_string_replacement.jpg",
    texto2: "A troca deve ser feita uma corda de cada vez para evitar que o cavalete saia da posição correta."
},
{
    pagina: 17,
    titulo: "Tipos de Som no Violino",
    texto1: "O violinista pode produzir sons suaves, fortes, curtos ou longos dependendo da pressão e velocidade do arco.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/92/Violin_playing.jpg",
    texto2: "O controle do arco é um dos fatores mais importantes para a expressividade musical."
},
{
    pagina: 18,
    titulo: "Dinâmica Musical",
    texto1: "A dinâmica representa a intensidade do som, podendo variar entre piano (fraco) e forte.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Music_dynamics.png",
    texto2: "Essas variações tornam a música mais emocionante e expressiva."
},
{
    pagina: 19,
    titulo: "Prática Diária",
    texto1: "O desenvolvimento no violino acontece através da prática constante e organizada.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Student_violin_practice.jpg",
    texto2: "Treinar poucos minutos todos os dias costuma gerar melhores resultados do que estudar muitas horas apenas ocasionalmente."
},
{
    pagina: 20,
    titulo: "Importância da Persistência",
    texto1: "Aprender violino exige paciência, disciplina e dedicação contínua.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/8/84/Violin_concert.jpg",
    texto2: "Com prática regular, o músico desenvolve técnica, musicalidade e confiança para tocar diferentes estilos musicais."
}
]



let index = 0; //variavel que devine em qual index está acessando, ou seja em qual instrumento ele está

//parte que captura onde cada elemento vai ficar no html
let tituloPagina = document.getElementById("titulo_pagina");
let textoCurso = document.getElementById("texto_curso");
let imagem = document.getElementById("div_imagem");
let texto2Curso = document.getElementById("texto2_curso");
let btn_finalizar = document.getElementById("terminar")

//função que exibe os conteudos na pagina baseada no index
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

//função que é responsavel por avançar a lista para o proximo item e quando chega no maximo da lista ele volta para o primeiro
function mudar(marca){
    if(marca == 1){
        index ++;
        if(index == paginasTeoria.length){
            index = 0;
        }
    paginacao(paginasTeoria)
    }else if(marca == 2){
        index --;
        if(index < 0){
            index = paginasTeoria.length - 1;
        }
    paginacao(paginasTeoria)
    }
}   


//baseado no curso que ele está redireciona para a pagina certa dele
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

function finalizarCurso(){
    let curso = document.getElementById("escrita")
    let quiz = document.getElementById("quiz")
    curso.style.display = "none";
    quiz.style.display = "flex";
}



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

        function preencherHTMLcomQuestaoAtual(index) {
            habilitarAlternativas(true)
            const questaoAtual = listaDeQuestoes[index]
            numeroDaQuestaoAtual = index
            console.log("questaoAtual")
            console.log(questaoAtual)
            document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
            document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
            document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
            document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
            document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
            document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
        }

        function submeter() {
            const options = document.getElementsByName("option"); // recupera alternativas no html

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

            if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
                preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
            } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
                alert("Atenção... a próxima é a ultima questão!")
                preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
            } else {
                finalizarJogo()
            }
            limparCoresBackgroundOpcoes()
        }

        function tentarNovamente() {
            // atualiza a página
            window.location.reload()
        }

        function checarResposta() {
            const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
            const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

            const options = document.getElementsByName("option"); // recupera alternativas no html

            let alternativaCorreta = null // variável para armazenar a alternativa correta

            options.forEach((option) => {
                if (option.value === respostaQuestaoAtual) {
                    console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                    alternativaCorreta = option.labels[0].id
                }
            })

            // verifica se resposta assinalada é correta
            options.forEach((option) => {
                if (option.checked === true && option.value === respostaQuestaoAtual) {
                    document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                    pontuacaoFinal++
                    certas++
                    document.getElementById("spanCertas").innerHTML = certas
                    numeroDaQuestaoAtual++
                } else if (option.checked && option.value !== respostaQuestaoAtual) {
                    const wrongLabelId = option.labels[0].id

                    document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                    document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                    tentativaIncorreta++
                    erradas++
                    document.getElementById("spanErradas").innerHTML = erradas
                    numeroDaQuestaoAtual++
                }
            })
        }

        function limparCoresBackgroundOpcoes() {
            const options = document.getElementsByName("option");
            options.forEach((option) => {
                document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
                document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
            })
        }

        function desmarcarRadioButtons() {
            const options = document.getElementsByName("option");
            for (let i = 0; i < options.length; i++) {
                options[i].checked = false;
            }
        }

        function finalizarJogo() {
            let textoParaMensagemFinal = null
            let classComCoresParaMensagemFinal = null
            const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

            if (porcentagemFinalDeAcertos <= 0.3) {
                textoParaMensagemFinal = "Parece que você não estudou..."
                classComCoresParaMensagemFinal = "text-danger-with-bg"
            }
            else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
                textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
                classComCoresParaMensagemFinal = "text-warning-with-bg"
            }
            else if (porcentagemFinalDeAcertos >= 0.9) {
                textoParaMensagemFinal = "Uau, parabéns!"
                classComCoresParaMensagemFinal = "text-success-with-bg"
            }

            textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões."


            document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
            document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal) 
            document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

            document.getElementById('jogo').classList.add("text-new-gray") 

            btnProx.disabled = true
            btnSubmeter.disabled = true
            // btnConcluir.disabled = true
            btnTentarNovamente.disabled = false

        }
    