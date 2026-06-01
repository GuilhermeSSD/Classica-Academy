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
    sessionStorage.removeItem("cursoAcessado")
    listaIstrumentosDisponiveis = []
    fetch(`/instrumento/listaracessos/${sessionStorage.ID_USUARIO}`)
        .then(res => res.json())
        .then(banco => {
    for (let index = 0; index < banco.length; index++) {
        let posicaoAtual = banco[index].fk_instrumento;
        if(posicaoAtual == 1){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_violino.style.display = "flex" 
        }
        if(posicaoAtual == 2){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_viola.style.display = "flex" 
        }
        if(posicaoAtual == 3){
            listaIstrumentosDisponiveis.push(posicaoAtual);
            card_violoncelo.style.display = "flex" 
        }
    }
    sessionStorage.setItem("temAcesso",listaIstrumentosDisponiveis)
});

}