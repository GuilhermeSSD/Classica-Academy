//função que muda a pagina baseada no valor que sera enviado no parametro
function mudarpag(pagn){
    if(pagn == 1){
        sessionStorage.setItem("cursoAcessado","violino")
        return window.location = "curso_musica_violino.html"
    }

    if(pagn == 2){
        sessionStorage.setItem("cursoAcessado","viola")
        return window.location = "curso_musica_viola.html"
    }

    if(pagn == 3){
        sessionStorage.setItem("cursoAcessado","violoncelo")
        return window.location = "curso_musica_violoncelo.html"
    }
}


function VerifCursos(){

    //zera da sessão os curso acessado, ja que ele não acessou nada ainda
    sessionStorage.removeItem("cursoAcessado")

    //lista para receber os instrumento que o usuario tem acesso
    listaIstrumentosDisponiveis = []
    //Faz a requisição pelo metodo get para receper o resultado da instrução do instrumentos model
    fetch(`/instrumento/listaracessos/${sessionStorage.ID_USUARIO}`)
        .then(res => res.json())
        .then(listaObjetos => {
    // o for percore a lista que voltou da requisição
    for (let index = 0; index < listaObjetos.length; index++) {
        let posicaoAtual = listaObjetos[index].fk_instrumento;

        // if que torna o curso de violino disponivel caso o usuario tenha acesso
        if(posicaoAtual == 1){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_violino.style.display = "flex" 
        }

        // if que torna o curso de viola disponivel caso o usuario tenha acesso
        if(posicaoAtual == 2){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_viola.style.display = "flex" 
        }

        // if que torna o curso de violoncelo disponivel caso o usuario tenha acesso
        if(posicaoAtual == 3){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_violoncelo.style.display = "flex" 
        }
    }
    //seta a lista de instrumentos disponiveis no sessionStoraje para possiveis necessidades futuras
    sessionStorage.setItem("temAcesso",listaIstrumentosDisponiveis)
});

}