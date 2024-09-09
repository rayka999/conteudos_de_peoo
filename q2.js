const url_jogos=`https://worldcupjson.net/matches`;
fetch(url_jogos)
   .then(response => response.json())
   .then(jogos => liste_jogos(jogos));

//função responsável por preencher um elemento <select> com opções de jogos.
function liste_jogos(jogos) {
    let select=document.getElementById("jogo");
    for (let jogo of jogos) {
        let novaOpcao=new Option(`${jogo.home_team_country} X ${jogo.away_team_country}`, jogo.id)
        //Adiciona a nova opção ao final da lista de opções do <select>.
        select.options[select.options.length] = novaOpcao;
    }
}

//função responsável por exibir os detalhes de um jogo selecionado.
function mostrar_detalhes() {
    let jogo_id=document.getElementById('jogo').value;
    let resultado=document.getElementById("resultado");
    resultado.innerHTML='';
    const url_detalhes=`https://worldcupjson.net/matches`;
    fetch(url_detalhes)
       .then(response => response.json())
       .then(dados => {
        for (let dado of dados) {
            if (dado.id == jogo_id) {
                let div=document.createElement('div');
                let vencedor = 0;
                if (dado.winner_code === dado.home_team.country) {
                    vencedor = 'Vencedor: ' + dado.home_team.name;
                } else if (dado.winner_code === dado.away_team.country) {
                    vencedor= 'Vencedor: '+ dado.away_team.name; 
                }else {
                    vencedor = 'Vencedor: Empate';
                }
                
                div.innerHTML = `${dado.home_team.name} ${dado.home_team.goals} (${dado.home_team.penalties})
                X (${dado.away_team.penalties}) ${dado.away_team.goals} ${dado.away_team.name} <br><br>
                <b>${vencedor}<b/>`;
                resultado.appendChild(div)
            }
        }
       }
       );
}