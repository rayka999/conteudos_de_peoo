const url_zones=`https://worldtimeapi.org/api/timezone`
fetch(url_zones)
   .then(response => response.json())
   .then(zones => list_zones(zones))

function list_zones(zones) {
    let select=document.getElementById("zonas")
    for (let zone of zones) {
        let novaOpcao=new Option(zone,zone)
        select.options[select.options.length]=novaOpcao
    }
}

function fuso() {
    let zona=document.getElementById("zonas").value;
    const url_times=`https://worldtimeapi.org/api/timezone/${zona}`
    fetch(url_times)
        .then(response => response.json())
        .then(time =>{
            let resultado=document.getElementById("resultado")
            let div=document.createElement('div')
            div.innerHTML=`<b>${zona}</b> : ${time.datetime.split("T")[1].split(".")[0]} - ${time.datetime.split("T")[0]}`
            resultado.appendChild(div)
        })
}