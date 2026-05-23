const ctx = document.getElementById('grafico_violino');
const ctx1 = document.getElementById('grafico_viola');
const ctx2 = document.getElementById('grafico_violoncelo');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Violino'],
        datasets: [
            {
                label: 'Teoria',
                data: [80],
                backgroundColor: '#4d3e37'
                
            },
            {
                label: 'Instrumento',
                data: [65],
                backgroundColor: '#c9933f'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});



new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Viola'],
        datasets: [
            {
                label: 'Teoria',
                data: [80],
                backgroundColor: '#4d3e37'
                
            },
            {
                label: 'Instrumento',
                data: [65],
                backgroundColor: '#c9933f'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});


new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Violoncelo'],
        datasets: [
            {
                label: 'Teoria',
                data: [80],
                backgroundColor: '#4d3e37'
                
            },
            {
                label: 'Instrumento',
                data: [65],
                backgroundColor: '#c9933f'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});




let mostrar = sessionStorage.getItem("temAcesso");
let nome = sessionStorage.getItem("NOME_USUARIO");
bem_vindo.innerHTML = `Seja bem vindo - ${nome}`


if(mostrar.includes(1)){
    violino.style.display = "block"
}

if(mostrar.includes(2)){
    viola.style.display = "block"
}

if(mostrar.includes(3)){
    violoncelo.style.display = "block"
}

