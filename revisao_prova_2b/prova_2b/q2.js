let meses=[0, "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","outubro","novembro","dezembro"]
function feriados() {
    let ano=document.getElementById("ano").value;
    const url=`https://brasilapi.com.br/api/feriados/v1/${ano}.`
    fetch(url)
        .then(response => response.json())
        .then(dados =>{
            let num_feriados=0
            for (let i=0;i<dados.length;i++) {
                num_feriados++
            }
            let resultado=document.getElementById("resultado")
            resultado.innerHTML='';
            let div=document.createElement("div");
            div.innerHTML=`<h3>Feriados Nacionais de ${ano} <br></h3> <p>Total de feriados: ${num_feriados}</p>`
            resultado.appendChild(div);
            dados.forEach(feriado => {
                let num_do_mes=parseInt(feriado.date.split("-")[1])
                let div=document.createElement("div");
                div.innerHTML=`<b>${meses[num_do_mes]}<br><br>${feriado.date.split("-")[2]} - ${feriado.name}`
                resultado.appendChild(div)
            });
        })
}