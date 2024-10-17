const url_c=`https://api.chucknorris.io/jokes/categories`;
fetch(url_c)
    .then(response => response.json())
    .then(categorias => list(categorias))

function list(categorias) {
    let select=document.getElementById("categoria");
    for (let categoria of categorias) {
        let nova=new Option(categoria,categoria);
        select.options[select.options.length]=nova
    }
}

function piada() {
    let categoria=document.getElementById("categoria").value;
    let resultado=document.getElementById("respostas");
    resultado.innerHTML="";
    const url_p=`https://api.chucknorris.io/jokes/random?category=${categoria}`
    fetch(url_p)
       .then(response => response.json())
       .then(piadas =>{
        let div=document.createElement("div")
        div.innerHTML=`<b>${piadas.value}</b>`
        resultado.appendChild(div)
       })
}