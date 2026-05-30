function navegacaoGlobal(irparaessa){
    if(irparaessa == "cursosDisponiveis"){
        window.location = "/cursos_disponiveis.html"
    }else if(irparaessa == "teoria"){
        let acessado = sessionStorage.getItem("cursoAcessado");
        if (acessado == "violino") {
            window.location = "/curso_musica_violino.html"
        } else if(acessado == "viola"){
            window.location = "/curso_musica_viola.html"
        }else if(acessado == "violoncelo"){
            window.location = "/curso_musica_violoncelo.html"
        }

    }else if(irparaessa == "pratica"){
        let acessado = sessionStorage.getItem("cursoAcessado");
        if (acessado == "violino") {
            window.location = "/curso_intrumento_violino.html"
        } else if(acessado == "viola"){
            window.location = "/curso_intrumento_viola.html"
        }else if(acessado == "violoncelo"){
            window.location = "/curso_intrumento_violoncelo.html"
        }

    }else if(irparaessa == "licoes"){
        alert("area em progresso")
    }else if(irparaessa == "dashboard"){
        window.location = "/dashboard.html"
    }
}

function sair(){
    sessionStorage.removeItem("EMAIL_USUARIO");
    sessionStorage.removeItem("NOME_USUARIO");
    sessionStorage.removeItem("ID_USUARIO");
    sessionStorage.removeItem("NOME_USUARIO");
    sessionStorage.removeItem("temAcesso");
    sessionStorage.removeItem("cursoAcessado");
    window.location = "/index.html"
}


