let album_id=1;
const url_photos=`https://jsonplaceholder.typicode.com/photos?albumId=${album_id}`;

fetch(url_photos)
  .then(response => response.json())
  .then(fotos => exibir_galeria(fotos));

  function exibir_galeria(fotos){
    let galeria = document.getElementById('galeria');
    fotos.forEach(foto => {
      const div_photo = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('p');

      img.src = foto.thumbnailUrl;
      img.alt = foto.title;
      title.textContent = foto.title;

      div_photo.appendChild(img);
      div_photo.appendChild(title);
      galeria.appendChild(div_photo);
    });
  }