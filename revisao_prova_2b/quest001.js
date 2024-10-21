/*const url = `https://api.nobelprize.org/v1/prize.json`;

fetch(url)
    .then(response => response.json())
    .then(dados => listar_anos(dados.prizes));

function listar_anos(dados) {
    let select = document.getElementById('ano');
    let anos = new Set();

    
    for (let prêmio of dados) {
        anos.add(prêmio.year);
    }

    
    anos.forEach(ano => {
        let option = document.createElement('option');
        option.value = ano;
        option.textContent = ano;
        select.appendChild(option);
    });
}

function premios() {
    let ano=document.getElementById("ano").value
    let resultado=document.getElementById("resultado");
    const url = `https://api.nobelprize.org/v1/prize.json`;

    fetch(url)
        .then(response => response.json())
        .then(informacoes => {
            for (let dados of informacoes.prizes) {
                if (dados.year == ano) {
                    let laureados = dados.laureates.map(laureado => 
                        laureado.firstname + ' ' + laureado.surname)
                    let motivacao = dados.laureates.map(motivacao => 
                        motivacao.motivation)
                    let div=document.createElement("div");
                    div.innerHTML=`<b>Categoria: ${dados.category}</b> <br> <b>Laureados:</b> ${laureados} <br> <b>Motivação:</b> ${motivacao}`
                    resultado.appendChild(div)
                }
            }
        });
}*/

const url = `https://api.nobelprize.org/v1/prize.json`;

fetch(url)
    .then(response => response.json())
    .then(dados => listar_anos(dados.prizes));

function listar_anos(dados) {
    let select = document.getElementById('ano');
    let anos = new Set();

    for (let prêmio of dados) {
        anos.add(prêmio.year);
    }

    anos.forEach(ano => {
        let option = document.createElement('option');
        option.value = ano;
        option.textContent = ano;
        select.appendChild(option);
    });
}

function premios() {
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");
    const url = `https://api.nobelprize.org/v1/prize.json`;

    fetch(url)
        .then(response => response.json())
        .then(informacoes => {
            resultado.innerHTML = ''; // Limpar resultados anteriores
            let motivacoesExibidas = new Set(); // Set para armazenar motivações já exibidas

            for (let dados of informacoes.prizes) {
                if (dados.year == ano) {
                    let laureados = dados.laureates.map(laureado => 
                        laureado.firstname + ' ' + laureado.surname).join(', ');

                    // Extrair motivação única
                    let motivacao = dados.laureates.map(laureado => 
                        laureado.motivation).filter((motivo, index, self) => 
                            self.indexOf(motivo) === index // Filtrar motivações duplicadas
                        ).join(', ');

                    // Verificar se a motivação já foi exibida
                    if (!motivacoesExibidas.has(motivacao)) {
                        motivacoesExibidas.add(motivacao); // Adicionar a motivação ao Set

                        let div = document.createElement("div");
                        div.innerHTML = `<b>Categoria: ${dados.category}</b> <br> <b>Laureados:</b> ${laureados} <br> <b>Motivação:</b> ${motivacao}`;
                        resultado.appendChild(div);
                    }
                }
            }
        });
}


