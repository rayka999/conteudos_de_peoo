const url_teams = 'https://worldcupjson.net/teams';
const url_matches = 'https://worldcupjson.net/matches';

fetch(url_teams)
    .then(response => response.json())
    .then(dados => {
        fetch(url_matches)
            .then(response => response.json())
            .then(jogos => mostrar_tabela(dados, jogos));
    })

    //função responsável por processar os dados das equipes e dos jogos e exibir as tabelas no HTML.
function mostrar_tabela(dados, jogos) {
    const grupos = dados.groups;
    const resultado = document.getElementById('resultado');

    // Filtra apenas as partidas da fase de grupos
    const jogos_fase_de_grupos = jogos.filter(jogo => jogo.stage_name === 'First stage');

    // Objeto para armazenar estatísticas dos times
    const estatisticas = {};

    // Inicializa as estatísticas para cada time
    for (const grupo of grupos) {
        for (const team of grupo.teams) {
            estatisticas[team.name] = {
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                points: 0,
                goalsFor: 0,
                goalsAgainst: 0
            };
        }
    }

    // Calcula as estatísticas das partidas
    for (const jogo of jogos_fase_de_grupos) {
        const homeTeam = jogo.home_team.name;
        const awayTeam = jogo.away_team.name;
        const homeGoals = jogo.home_team.goals;
        const awayGoals = jogo.away_team.goals;

        estatisticas[homeTeam].played++;
        estatisticas[awayTeam].played++;
        estatisticas[homeTeam].goalsFor += homeGoals;
        estatisticas[homeTeam].goalsAgainst += awayGoals;
        estatisticas[awayTeam].goalsFor += awayGoals;
        estatisticas[awayTeam].goalsAgainst += homeGoals;

        //Verifica se o time da casa venceu.
        if (homeGoals > awayGoals) {
            estatisticas[homeTeam].won++;
            estatisticas[awayTeam].lost++;
            estatisticas[homeTeam].points += 3;
        //Verifica se o time visitante venceu.
        } else if (homeGoals < awayGoals) {
            estatisticas[awayTeam].won++;
            estatisticas[homeTeam].lost++;
            estatisticas[awayTeam].points += 3;
            //verifica empate
        } else {
            estatisticas[homeTeam].drawn++;
            estatisticas[awayTeam].drawn++;
            estatisticas[homeTeam].points++;
            estatisticas[awayTeam].points++;
        }
    }

    // objeto para armazenar os times classificados de cada grupo.
    const classificados = {};
    for (const grupo of grupos) {
        // Ordena os times do grupo por pontos, saldo de gols e gols marcados
        const timesOrdenados = grupo.teams
        //criação de um novo array de objetos que combinam o nome do time com suas estatísticas associadas.
            .map(team => ({
                name: team.name,
                // acessa e manipula as estatísticas de um time específico. 
                ...estatisticas[team.name]
            }))
            .sort((a, b) => {
                // Ordena primeiro pelos pontos.
                if (a.points !== b.points) return b.points - a.points;
                const saldoGolsA = a.goalsFor - a.goalsAgainst; //gols do time A
                const saldoGolsB = b.goalsFor - b.goalsAgainst;//gols do time B
                //Ordena pelo saldo de gols.
                if (saldoGolsA !== saldoGolsB) return saldoGolsB - saldoGolsA;
                return b.goalsFor - a.goalsFor;// Ordena pelos gols marcados em caso de empate no saldo de gols.
            });

        // Considera os dois primeiros times como classificados
        classificados[grupo.letter] = timesOrdenados.slice(0, 2);
    }

    // Exibe a tabela para cada grupo
    for (const grupo of grupos) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Cabeçalho da Tabela
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.textContent = `Grupo ${grupo.letter}`;
        headerRow.appendChild(headerCell);

        // Itera sobre as palavras do cabeçalho e cria as células correspondentes.
        const palavras_head = [ 'Jogos', 'Vit', 'Emp', 'Der', 'Pts'];

        for (const element of palavras_head) {
            const header = document.createElement('th');
            header.textContent = element;
            headerRow.appendChild(header);
        }

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Adiciona as equipes e suas estatísticas
        for (const team of grupo.teams) {
            const statsTeam = estatisticas[team.name];
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${team.name}</td>
                <td>${statsTeam.played}</td>
                <td>${statsTeam.won}</td>
                <td>${statsTeam.drawn}</td>
                <td>${statsTeam.lost}</td>
                <td>${statsTeam.points}</td>
            `;
            
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        resultado.appendChild(table);

        // Exibe quais times foram classificados
        const classificadosParaFaseSeguinte = classificados[grupo.letter];
        if (classificadosParaFaseSeguinte) {
            const classificadosTable = document.createElement('table');
            const classificadosThead = document.createElement('thead');
            const classificadosTbody = document.createElement('tbody');
            
            // Cabeçalho da Tabela de Classificados
            const classificadosHeaderRow = document.createElement('tr');
            const classificadosHeaderCell = document.createElement('th');
            classificadosHeaderCell.textContent = `Classificados do Grupo ${grupo.letter}`;
            classificadosHeaderRow.appendChild(classificadosHeaderCell);
            
            classificadosThead.appendChild(classificadosHeaderRow);
            classificadosTable.appendChild(classificadosThead);
            
            // Adiciona os times classificados
            for (const team of classificadosParaFaseSeguinte) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${team.name}</td>`;
                classificadosTbody.appendChild(row);
            }
            
            classificadosTable.appendChild(classificadosTbody);
            resultado.appendChild(classificadosTable);
        }
    }
}