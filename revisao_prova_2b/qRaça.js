const url_nome=`https://api.thecatapi.com/v1/breeds`
fetch(url_nome)
    .then(response => response.json())
    .then(names => list_names(names))

function list_names(names) {
    let select=document.getElementById("raça")
    for (let name of names) {
        let novaopcao=new Option(name.name, name.name)
        select.options[select.options.length]=novaopcao
    }
}

function mostrar_raça(){
    let raça=document.getElementById('raça').value;
    let url_inf=`https://api.thecatapi.com/v1/breeds`
    fetch(url_inf)
        .then(response => response.json())
        .then(dados => {
            let resultado=document.getElementById("saida");
            resultado.innerHTML='';
            for (let dado of dados) {
                if (dado.name ==raça) {
                    let div=document.createElement("div");
                    div.innerHTML=`Nome: ${dado.name} <br>Temperamento: ${dado.temperament} <br> Origem:${dado.origin} <br> Descriçao: ${dado.description} <br> Expectativa de vida: ${dado.life_span}`
                    let url_img=`https://api.thecatapi.com/v1/images/search?breed_ids=${dado.id}`
                    fetch(url_img)
                        .then(response =>response.json())
                        .then(imagens => {
                            let resultado=document.getElementById('saida');
                            imagens.forEach(fotos => {
                                let div=document.createElement('div');
                                let foto=document.createElement('img');
                    
                                foto.src=fotos.url;
                    
                                div.appendChild(foto);
                                resultado.appendChild(div);})
                            })
                    resultado.appendChild(div)
                }
            }
        })
}