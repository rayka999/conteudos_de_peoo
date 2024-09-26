const url_paises="https://restcountries.com/v3.1/all";

fetch(url_paises)
    .then(response => response.json())
    .then(dados => list_pais(dados));

function list_pais(dados) {
    let select=document.getElementById('paises');
    for (let pais of dados) {
        let newoption= new Option(pais.name.official, pais.name.official);
        select.options[select.options.length]= newoption;
    }
}

function info_pais(){
    const url="https://restcountries.com/v3.1/all";

fetch(url)
    .then(response => response.json())
    .then(dados => {
        let pais=document.getElementById("paises").value;
        let resposta=document.getElementById("resultado");
        resposta.innerHTML=''
        for (let p of dados) {
            if (p.name.official==pais) {
                let div_pais=document.createElement('div');
                let img=document.createElement('img');
                let informacoes=document.createElement('p');
    
                img.src=p.flags.png
                informacoes.innerHTML=`<b>Continente:${p.continents}<br><br>Capital:${p.capital}`;
                div_pais.appendChild(img);
                div_pais.appendChild(informacoes)
                resposta.appendChild(div_pais)
            }
        }
    });
}