bem_vindo.innerHTML = `Seja bem vindo - ${sessionStorage.getItem("NOME_USUARIO")}`;
let exibirAcessos = ""
if (sessionStorage.getItem("temAcesso").includes(1)){
    violino.style.display = "block";
} 
if (sessionStorage.getItem("temAcesso").includes(2)){
    viola.style.display = "block";

} 
if (sessionStorage.getItem("temAcesso").includes(3)){
    violoncelo.style.display = "block";

} 

const grafVio = document.getElementById('grafico_violino');
const grafViola = document.getElementById('grafico_viola');
const grafiCelo = document.getElementById('grafico_violoncelo');
const graficoViolino = new Chart(grafVio, {
    type: 'bar',
    data: {
        labels: ['Violino'],
        datasets: [
            { label: 'Teoria', data: [0], backgroundColor: '#4d3e37' },
            { label: 'Instrumento', data: [0], backgroundColor: '#c9933f' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});

const graficoViola = new Chart(grafViola, {
    type: 'bar',
    data: {
        labels: ['Viola'],
        datasets: [
            { label: 'Teoria', data: [0], backgroundColor: '#4d3e37' },
            { label: 'Instrumento', data: [0], backgroundColor: '#c9933f' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});

const graficoVioloncelo = new Chart (grafiCelo, {
    type: 'bar',
    data: {
        labels: ['Violoncelo'],
        datasets: [
            { label: 'Teoria', data: [0], backgroundColor: '#4d3e37' },
            { label: 'Instrumento', data: [0], backgroundColor: '#c9933f' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});

function atualizarGrafico(dados, instrumento, grafico) {
    var teoria = 0;
    var pratica = 0;
    for (var i = 0; i < dados.length; i++) {
        if (dados[i].instrumento == instrumento) {
            if (dados[i].tipoCurso == "Teoria") {
                teoria = dados[i].maiorNota;
            }

            if (dados[i].tipoCurso == "pratica") {
                pratica = dados[i].maiorNota;
            }
        }
    }

    grafico.data.datasets[0].data[0] = teoria;
    grafico.data.datasets[1].data[0] = pratica;
    grafico.update();
}

function carregarDashboard() {
    var idUsuario = sessionStorage.getItem("ID_USUARIO");
    fetch("/dashboard/maiores-notas/" + idUsuario)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            atualizarGrafico(dados, "violino", graficoViolino);
            atualizarGrafico(dados, "viola", graficoViola);
            atualizarGrafico(dados, "violoncelo", graficoVioloncelo);
        });
}





