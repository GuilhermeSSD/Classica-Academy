function comecar(){
    window.location.href = "Login.html";
}



const instrumentos = [
    {
    nome: "Violino",
    descricao: "Conhecido por seu alcance expressivo e profundidade emocional, o violino tem sido a peça central de música clássica por séculos. De Bach e Beethoven, mestres compositores escreveram peças atemporais para este elegante instrumento.",
    metodo: "Metodologia: ShmoolCCb/MSA",
    descricaoMetodo: "O Método Schmoll é um método didático tradicional para o estudo do violino, muito utilizado no ensino inicial do instrumento, inclusive no Brasil. Ele aparece principalmente no livro Método Schmoll para Violino, atribuído a Paul Schmoll, e tem como objetivo construir uma base técnica sólida antes de avançar para repertório mais complexo.",
    imagem: "img/violino.jpg",
    paginaLicao: "curso_violino.html"
    }
,
    {
    nome: "Viola",
    descricao: "viola é um intrumento com um timbre mais grave que o violino",
    metodo: "SITT/MSA",
    descricaoMetodo: "metodo focado no aprendizado por meio de desafios",
    imagem: "img/viola.jpg",
    paginaLicao: "curso_viola.html"

    }
, 
    {
    nome: "violoncelo",
    descricao: "violoncelo é um intrumento responsavel por fazer o baixo de uma canção",
    metodo: "Dotzauer/MSA",
    descricaoMetodo: "metodo focado no aprendizado por meio de coisas",
    imagem: "img/violoncelo.jpg",
    paginaLicao: "curso_violaocello.html"

    }
]

let index = 0;
let pag = "curso_violino.html";


let tituloNome = document.getElementById("titulo_instrumento");
let descricaoInstrumento = document.getElementById("sobre_intrumento");
let tituloMetodo = document.getElementById("nome_metodo");
let descricaoMetodo = document.getElementById("descricao_metodo");

function exibirInstrumento() {
    tituloNome.innerHTML = instrumentos[index].nome;
    descricaoInstrumento.innerHTML = instrumentos[index].descricao;
    tituloMetodo.innerHTML = instrumentos[index].metodo;
    descricaoMetodo.innerHTML = instrumentos[index].descricaoMetodo;
    pag = instrumentos[index].paginaLicao
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

function irlicao(){
    window.location.href = pag;
}

