//ol => lista de tarefas numeradas
//li => lista de itens

function listar() {
    const user_Id = document.getElementById("user_id").value;
    const url= `https://jsonplaceholder.typicode.com/todos?userId=${user_Id}`;

fetch(url)
  .then(response => response.json())
  .then(listas => exibir_atividades(listas));
}

function exibir_atividades(listas) {
    let atividades=document.getElementById("atividades");
    atividades.innerHTML=``;
    for (let lista of listas) {
        let item=document.createElement("li");
        item.innerHTML= lista.title;
        if (lista.completed == true) {
            item.style.color = 'green';
            item.style.textDecoration = 'line-through';
        } else {
            item.style.color = "red";
        }
        atividades.appendChild(item);
    }
}