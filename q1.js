//Define a URL que será usada para buscar os dados das partidas da Copa
const url_datas=`https://worldcupjson.net/matches`;
//Faz uma requisição HTTP para obter os dados da URL.
fetch(url_datas)
//Converte a resposta da requisição em formato JSON.
  .then(response => response.json())
  //chama a função com os dados concluídos
  .then(datas => list_dates(datas));

//função que será responsável por processar os dados e preencher um elemento <select> com as datas disponíveis.
function list_dates(datas) {
    let select=document.getElementById('data');
    //Cria um conjunto (Set) para armazenar datas únicas.
    const dates=new Set();
    for (let data of datas) {
        let NovaData=data.datetime.split('T')[0];
        dates.add(NovaData);
    }
    //Itera sobre o conjunto de datas e cria uma nova opção para cada uma.
    for (let date of Array.from(dates)) {
        let novaOpcao = new Option(date, date);
        select.options[select.options.length] = novaOpcao;
    }
}
//função usada para mostrar os jogos da data selecionada pelo usuário.
function show_play() {
    let data=document.getElementById('data').value;
    let url_jogos=`https://worldcupjson.net/matches`;
    fetch(url_jogos)
      .then(response => response.json())
      .then(jogos => {
        let resultado=document.getElementById('resultado');
        resultado.innerHTML='';
        //Itera sobre cada jogo nos dados.
        for (let jogo of jogos) {
            if (jogo.datetime.startsWith(data)) {
                let div = document.createElement("div");
                div.innerHTML = `${jogo.home_team_country} ${jogo.home_team.goals} 
                (${jogo.home_team.penalties}) X (${jogo.away_team.penalties}) 
                ${jogo.away_team.goals} ${jogo.away_team_country} <br><br>`
                //Adiciona a div criada ao elemento resultado.
                resultado.appendChild(div)
            }
        }
    });
}