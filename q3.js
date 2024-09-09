const url_equipe=`https://worldcupjson.net/matches`;
fetch(url_equipe)
   .then(response => response.json())
   .then(equipes => listar_equipes(equipes))

//função responsável por listar todas as equipes em um elemento <select>.
function listar_equipes(equipes) {
    let select=document.getElementById('equipe');
    let times= new Set();
    for (let equipe of equipes) {
        times.add(equipe.home_team_country);
        times.add(equipe.away_team_country);
    }
    for (let time of Array.from(times)) {
        let novaOpcao=new Option(time, time);
        select.options[select.options.length] = novaOpcao;
    }
}

//função responsável por exibir os jogos em que uma equipe específica participou.
function mostrar_jogos() {
    let time=document.getElementById('equipe').value;
    let url_jogos=`https://worldcupjson.net/matches`;
    fetch(url_jogos)
      .then(response => response.json())
      .then(jogos => {
        let resultado=document.getElementById("resultado");
        resultado.innerHTML='';
        for (let jogo of jogos) {
            if (jogo.home_team_country == time || jogo.away_team_country == time) {
                let div=document.createElement('div');
                div.innerHTML=`Data: ${jogo.datetime.split('T')[0]}<br>
                ${jogo.home_team_country} ${jogo.home_team.goals} (${jogo.home_team.penalties}) 
                X (${jogo.away_team.penalties}) ${jogo.away_team.goals} ${jogo.away_team_country}`;
                resultado.appendChild(div);
            }
        }
      })
}