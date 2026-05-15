function comecar(){
    window.location.href = "/login.html";
}
//Lista de json que contem as informações dos cards de cada instrumento
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
    descricao: "viola é um intrumento com um timbre mais grave que o violino",
    metodo: "SITT/MSA",
    descricaoMetodo: "Metodo focado no aprendizado por meio de desafios",
    imagem: "img/viola.jpg",
    }
, 
    {
    nome: "Violoncelo",
    descricao: "Violoncelo é um intrumento responsavel por fazer o baixo de uma canção",
    metodo: "Dotzauer/MSA",
    descricaoMetodo: "Metodo focado no aprendizado por meio de coisas",
    imagem: "img/violoncelo.jpg",
    }
]


let index = 0; //variavel que devine em qual index está acessando, ou seja em qual instrumento ele está
let pag = "login.html";

//parte que captura onde cada elemento vai ficar no html
let tituloNome = document.getElementById("titulo_instrumento");
let descricaoInstrumento = document.getElementById("sobre_intrumento");
let tituloMetodo = document.getElementById("nome_metodo");
let descricaoMetodo = document.getElementById("descricao_metodo");

//função que exibe os conteudos na pagina baseada no index
function exibirInstrumento() {
    tituloNome.innerHTML = instrumentos[index].nome;
    descricaoInstrumento.innerHTML = instrumentos[index].descricao;
    tituloMetodo.innerHTML = instrumentos[index].metodo;
    descricaoMetodo.innerHTML = instrumentos[index].descricaoMetodo;
    foto_instrumento.style.backgroundImage =
        "url(" + instrumentos[index].imagem + ")";
}

//função que é responsavel por avançar a lista para o proximo item e quando chega no maximo da lista ele volta para o primeiro
function avancar(){
    index ++;
    if(index == instrumentos.length){
        index = 0;
}
exibirInstrumento()
}

//função que é responsavel por VOLTAR a lista para o item anterior e quando chega no minimo da lista ele vai para o ultimo
function voutar(){
    index --;
    if(index < 0){
        index = instrumentos.length - 1;
}
exibirInstrumento()
}





