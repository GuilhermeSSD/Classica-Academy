function comecar(){
    window.location.href = "/login.html";
}
const instrumentos = [
    {
    nome: "Violino",
    descricao: "Conhecido por seu alcance expressivo e profundidade emocional, o violino tem sido a peça central de música clássica por séculos. De Bach e Beethoven, mestres compositores escreveram peças atemporais para este elegante instrumento.",
    metodo: "Metodologia: ShmoolCCb/MSA",
    descricaoMetodo: "O Método Schmoll é um método didático tradicional para o estudo do violino, muito utilizado no ensino inicial do instrumento, inclusive no Brasil. Ele aparece principalmente no livro Método Schmoll para Violino, atribuído a Paul Schmoll, e tem como objetivo construir uma base técnica sólida antes de avançar para repertório mais complexo.",
    imagem: "img/violino.jpg",
    }
,
    {
    nome: "Viola",
    descricao: "Conhecida por seu timbre aveludado e profundo, a viola ocupa um papel essencial na música clássica, trazendo riqueza harmônica e expressividade às composições há séculos. Mestres como Johann Sebastian Bach e Ludwig van Beethoven escreveram obras que exploram a elegância e a intensidade única desse instrumento.",
    metodo: "Bratschenschule Berta Volmer Band I/MSA",
    descricaoMetodo: "O Bratschenschule Band I, de Berta Volmer, é um método introdutório para viola que trabalha leitura musical, técnica básica e musicalidade de forma progressiva, sendo muito usado na formação inicial do instrumentista.",
    imagem: "img/viola.jpg",
    }
, 
    {
    nome: "Violoncelo",
    descricao: "Conhecido por seu som profundo e expressivo, o violoncelo é um dos instrumentos mais emocionais da música clássica. Seu timbre próximo à voz humana inspirou compositores como Johann Sebastian Bach e Ludwig van Beethoven, que criaram obras marcantes explorando toda a sua intensidade e elegância.",
    metodo: "Dotzauer/MSA",
    descricaoMetodo: "O Método Dotzauer, de Friedrich Dotzauer, é um método clássico de violoncelo com estudos progressivos focados em técnica, afinação e controle do arco.",
    imagem: "img/violoncelo.jpg",
    }
]


let pag = "login.html";

let tituloNome = document.getElementById("titulo_instrumento");
let descricaoInstrumento = document.getElementById("sobre_intrumento");
let tituloMetodo = document.getElementById("nome_metodo");
let descricaoMetodo = document.getElementById("descricao_metodo");

function exibirInstrumento() {
    tituloNome.innerHTML = instrumentos[index].nome;
    descricaoInstrumento.innerHTML = instrumentos[index].descricao;
    tituloMetodo.innerHTML = instrumentos[index].metodo;
    descricaoMetodo.innerHTML = instrumentos[index].descricaoMetodo;
    foto_instrumento.style.backgroundImage =
        "url(" + instrumentos[index].imagem + ")";
}

function avancar(){
    index ++;
    if(index == instrumentos.length){
        index = 0;
}
exibirInstrumento()
}

function voutar(){
    index --;
    if(index < 0){
        index = instrumentos.length - 1;
}
exibirInstrumento()
}





