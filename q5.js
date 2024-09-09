// Define a URL para buscar os dados dos jogos da Copa do Mundo
const url_final = `https://worldcupjson.net/matches`;

// Faz uma requisição HTTP para a URL fornecida e espera uma resposta em formato JSON
fetch(url_final)
    .then(response => response.json()) // Converte a resposta da requisição em JSON
    .then(finais => exibir_final(finais)); // Passa o JSON convertido para a função 'exibir_final'

// Função para exibir os resultados finais dos jogos
function exibir_final(finais) {
    // Obtém o elemento HTML com o id 'resultado'
    let resultado = document.getElementById('resultado');
    
    // Itera sobre cada item no array 'finais'
    for (let final of finais) {
        // Verifica se o estágio do jogo é "Final"
        if (final.stage_name == "Final") {
            // Cria um novo elemento 'div' para exibir o resultado
            let div = document.createElement('div');
            
            // Declara uma variável para armazenar o campeão e vice-campeão
            let campeao;
            
            // Determina o campeão e vice-campeão com base no resultado do jogo
            if (final.winner == final.home_team.name) {
                campeao = `<b>campeão:</b><br>${final.home_team.name}<br><br>
                <b>vice-campeão:</b><br>${final.away_team.name}`;
            } else {
                campeao = `<b>campeão:</b><br>${final.away_team.name}<br><br>
                <b>vice-campeão:</b><br>${final.home_team.name}`;
            }
            
            // Define o conteúdo HTML da 'div' com o resultado do jogo e informações sobre o campeão e vice-campeão
            div.innerHTML = `${final.home_team_country} ${final.home_team.goals}(${final.home_team.penalties}) X
            (${final.away_team.penalties}) ${final.away_team.goals} ${final.away_team_country}
            <br><br>${campeao}`;
            
            // Adiciona a 'div' criada ao elemento com o id 'resultado'
            resultado.appendChild(div);
        }
    }
}