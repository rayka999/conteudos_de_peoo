const url_nasa=`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
fetch(url_nasa)
    .then(response => response.json())
    .then(imagem => {
        let resultado=document.getElementById('img')
        const div=document.createElement('div');
        const img=document.createElement('img');
        const title=document.createElement('p');

        img.src=imagem.url;
        title.textContent= imagem.title;

        div.appendChild(img);
        div.appendChild(title);
        resultado.appendChild(div)

    });