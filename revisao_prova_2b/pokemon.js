 const url = `https://pokeapi.co/api/v2/pokemon?limit=90`;
fetch(url)
    .then(response => response.json())
    .then(nomes => {
        let resultado = document.getElementById("resultado");
        for (let nome of nomes.results) {
            fetch(nome.url)
                .then(response => response.json())
                .then(pokemon => {
                    let div = document.createElement("div");
                    div.innerHTML = `
                        <h3>${pokemon.name}</h3>
                        <img src=${pokemon.sprites.front_default} />
                    `;
                    resultado.appendChild(div);
                });
        }
    });