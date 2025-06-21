const url_nome = `https://api.thecatapi.com/v1/breeds`;

fetch(url_nome)
    .then(response => response.json())
    .then(names => list_names(names));

function list_names(names) {
    let select = document.getElementById("raça");
    for (let name of names) {
        let novaopcao = new Option(name.name, name.name);
        select.options[select.options.length] = novaopcao;
    }
}

function mostrar_raça() {
    let raça = document.getElementById('raça').value;
    let url_inf = `https://api.thecatapi.com/v1/breeds`;

    fetch(url_inf)
        .then(response => response.json())
        .then(dados => {
            let resultado = document.getElementById("saida");
            resultado.innerHTML = '';

            for (let dado of dados) {
                if (dado.name == raça) {
                    // Criação da div de informação
                    let div = document.createElement("div");
                    div.className = "card mb-3 p-3 shadow-sm"; // Bootstrap card

                    div.innerHTML = `
                        <h4 class="card-title text-primary">${dado.name}</h4>
                        <p><strong>Temperamento:</strong> ${dado.temperament}</p>
                        <p><strong>Origem:</strong> ${dado.origin}</p>
                        <p><strong>Descrição:</strong> ${dado.description}</p>
                        <p><strong>Expectativa de vida:</strong> ${dado.life_span} anos</p>
                    `;

                    // Buscar imagem
                    let url_img = `https://api.thecatapi.com/v1/images/search?breed_ids=${dado.id}`;
                    fetch(url_img)
                        .then(response => response.json())
                        .then(imagens => {
                            imagens.forEach(fotoData => {
                                let img = document.createElement('img');
                                img.src = fotoData.url;
                                img.className = "img-fluid rounded mt-3"; // imagem responsiva e arredondada
                                img.alt = `Imagem da raça ${dado.name}`;

                                div.appendChild(img);
                            });
                        });

                    resultado.appendChild(div);
                }
            }
        });
}
