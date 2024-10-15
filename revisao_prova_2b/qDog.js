const url_animals=`https://api.thecatapi.com/v1/images/search?limit=10`;
fetch(url_animals)
    .then(response => response.json())
    .then(imagens => {
        let resultado=document.getElementById('saida');
        imagens.forEach(fotos => {
            let div=document.createElement('div');
            let foto=document.createElement('img');

            foto.src=fotos.url;

            div.appendChild(foto);
            resultado.appendChild(div);
        });
    });