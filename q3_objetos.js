//criando um novo post na API (formato de teste, a API do site não vai receber realmente)
const url = 'https://jsonplaceholder.typicode.com/posts';

const novo_post = {
    userId: 1,
    title: 'Testando novo post',
    body: 'Este é o conteúdo do meu novo post.'
};

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  body: JSON.stringify(novo_post) //transforma o obj js em JSON
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log('Novo post criado:', data))
  .catch(error => console.error('Erro:', error));