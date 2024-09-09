function post() {
    let post_id=document.getElementById("post_id").value;
    const url_comments=`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;
//o link leva aos comentários do postId sendo igual a 1

fetch (url_comments)
    .then(response => response.json()) 
    .then(comments => exibir_comentarios(comments));
}

function exibir_comentarios(comments) {
    let comentarios =document.getElementById("comentários");
    comentarios.innerHTML="";
    for (let comment of comments) {
        console.log(`Nome: ${comment.name}`);
        console.log(`Email: ${comment.email}`);
        console.log(`Texto: ${comment.body}`);
        console.log("----------");
        let comentário = document.createElement('div'); //cria tags div no id postagem
        comentário.innerHTML=`
                            <p>#<b>Nome</b>: ${comment.name}</p>
                            <p>#<b>E-mail</b>:${comment.email}</p>
                            <p>#<b>Texto</b>:${comment.body}</p>
                            <br></br>`;
        comentarios.appendChild(comentário);
    }
}