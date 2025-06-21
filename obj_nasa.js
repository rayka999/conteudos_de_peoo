const url_nasa = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

fetch(url_nasa)
  .then(response => response.json())
  .then(imagem => {
    let resultado = document.getElementById('img');

    const div = document.createElement('div');
    div.className = "card mx-auto mb-4 shadow-sm"; // container com Bootstrap

    const img = document.createElement('img');
    img.src = imagem.url;
    img.className = "card-img-top img-fluid"; // imagem responsiva e integrada ao card
    img.alt = imagem.title;

    const body = document.createElement('div');
    body.className = "card-body";

    const title = document.createElement('h5');
    title.className = "card-title text-center text-primary";
    title.textContent = imagem.title;

    const desc = document.createElement('p');
    desc.className = "card-text text-justify";
    desc.textContent = imagem.explanation;

    body.appendChild(title);
    body.appendChild(desc);
    div.appendChild(img);
    div.appendChild(body);
    resultado.appendChild(div);
  });
