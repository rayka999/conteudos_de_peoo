const url_users="https://jsonplaceholder.typicode.com/users";
const url_posts="https://jsonplaceholder.typicode.com/posts";
let usuarios= ["*"];

fetch (url_users)
    .then(response => response.json()) 
    .then(users => criar_vetor(users));

function criar_vetor(users) {
    for (let user of users)
    usuarios.push(user.name);
}

fetch (url_posts)
    .then(response => response.json()) 
    .then(posts => exibir_posts(posts));

function exibir_posts(posts) {
    let postagens =document.getElementById("postagens");
    postagens.innerHTML=""
    for (let post of posts) {
        let postagem = document.createElement('div'); //cria tags div no id postagem
        postagem.innerHTML=`<p>#<b>${post.id}</b></p>
                            <p>#<b>Usuário</b>: ${usuarios[post.userId]}</p>
                            <p>#<b>Título</b>:${post.title}</p>
                            <p>#<b>Texto</b>:${post.body}</p>`;
        postagens.appendChild(postagem);
    }
}
//ctrl+shift+i = abre console (no navegador)