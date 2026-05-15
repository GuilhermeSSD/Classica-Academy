function sair(){
    sessionStorage.removeItem("EMAIL_USUARIO");
    sessionStorage.removeItem("NOME_USUARIO");
    sessionStorage.removeItem("ID_USUARIO");
    sessionStorage.removeItem("NOME_USUARIO");
    sessionStorage.removeItem("temAcesso");
    sessionStorage.removeItem("cursoAcessado");
    window.location = "/index.html"
}