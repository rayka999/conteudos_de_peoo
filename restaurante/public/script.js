import { Prato } from "../dist/Prato.js";
import { Mesa } from "../dist/Mesa.js";
import { Garcom } from "../dist/Garcom.js";

// Definição dos pratos
let item1 = new Prato('X-Braga', 13, 'Pão, Hambúrguer Smash, Cheddar e Molho da casa');
let item2 = new Prato('Duplo Braga', 20, 'Pão, 2 Hambúrguer Smash, Cheddar e Molho da casa');
let item3 = new Prato('Clássico Bacurau', 15, 'Pão, Hambúrguer de Crane de Sol, Queijo de Coalho, Cebola Roxa e Molho da casa');
let item4 = new Prato('Garcia Burguer', 16, 'Pão, Hambúrguer de Frango, Queijo sem lactose e Molho da casa');
let item5 = new Prato('Felix Vegetariano', 17, 'Pão, Hambúrguer de Soja assado na brasa, Alface, Tomate, Cebola e Molho da casa');
let item6 = new Prato('Batata Arante', 10, 'Batatas Fritas com tempero do chefe (acompanha Molho da casa)');
let item7 = new Prato('Batata Arante com Cheddar e Bacon', 15, 'Batatas Fritas com tempero do chefe, Cheddar e Bacon (acompanha Molho da casa)');
let item8 = new Prato('Anéis de Farias', 12, 'Anéis de Cebola fritos (acompanha molho)');
let item9 = new Prato('Giva Shake de Morango', 16, 'Milk Shake de morango com calda de morango batido na hora');
let item10 = new Prato('Giva Shake de Ninho com Nutella', 18, 'Milk Shake de Ninho com cobertura de Nutella batido na hora');
let item11 = new Prato('Petit Gateau a La França', 22, 'Petit Gateau de chocolate com soverte de creme e calda de chocolate');
let item12 = new Prato('Refrigerante 2L', 15, 'Coca-Cola, Cajuína, Guaraná, Sprite');
let item13 = new Prato('Refrigerante 1L', 10, 'Coca-Cola, Cajuína, Guaraná, Pepsi');
let item14 = new Prato('Refrigerante Latinha', 6, 'Coca-Cola, Guaraná, Sprite');
let item15 = new Prato('Suco (Copo)', 7, 'Limão, Morango, Maracujá e Laranja');
let item16 = new Prato('Suco (Jarra)', 15, 'Limão, Morango, Maracujá e Laranja');

let pratos = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16];

// Função para gerar os pratos na tabela
function gerar_Pratos() {
    const tabela = document.getElementById('tabela_pratos');
    tabela.innerHTML = "";

    // Cabeçalho da tabela
    const cabecalho = document.createElement('tr');
    cabecalho.innerHTML = `
        <th>Nome</th>
        <th>Preço</th>
        <th>Descrição</th>
        <th>Quant</th>
    `;
    tabela.appendChild(cabecalho);

    // Adiciona os pratos na tabela
    pratos.forEach(prato => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${prato.nome}</td>
            <td>R$ ${prato.preco.toFixed(2)}</td>
            <td>${prato.descricao}</td>
            <td>
                <button class="bolinha-btn" id="btn-${prato.nome}"></button>
                <div class="quantidade-input" id="input-${prato.nome}">
                    <input type="number" min="1" value="1" id="quantidade-${prato.nome}">
                </div>
            </td>
        `;
        tabela.appendChild(linha);

        // Adiciona o event listener para o botão de bolinha
        const botaoBolinha = document.getElementById(`btn-${prato.nome}`);
        botaoBolinha.addEventListener('click', () => mostrarInput(prato.nome));
    });
}

// Função para exibir o input de quantidade ao clicar no botão
function mostrarInput(pratoNome) {
    const inputDiv = document.getElementById(`input-${pratoNome}`);
    inputDiv.style.display = inputDiv.style.display === 'none' ? 'block' : 'none';
}

// Chama a função para gerar os pratos na tabela
gerar_Pratos();

// Definição das mesas
let mesa1 = new Mesa("mesa1");
let mesa2 = new Mesa("mesa2");
let mesa3 = new Mesa("mesa3");
let mesa4 = new Mesa("mesa4");
let mesa5 = new Mesa("mesa5");
let mesa6 = new Mesa("mesa6");
let mesa7 = new Mesa("mesa7");
let mesa8 = new Mesa("mesa8");
let mesa9 = new Mesa("mesa9");
let mesa10 = new Mesa("mesa10");

let mesas_restaurante = [mesa1, mesa2, mesa3, mesa4, mesa5, mesa6, mesa7, mesa8, mesa9, mesa10];

// Função para gerar as opções de mesa no select
function gerar_mesa() {
    let select = document.getElementById("mesa");
    mesas_restaurante.forEach(mesa => {
        let nova_opcao = new Option(mesa.nome, mesa.nome);
        select.options[select.options.length] = nova_opcao;
    });
}

// Chama a função para gerar as mesas no select
gerar_mesa();

// Definição dos garçons
let garcom_1 = new Garcom("Gabriela");
let garcom_2 = new Garcom("Marina");
let garcom_3 = new Garcom("Bernardo");
let garcom_4 = new Garcom("Guilherme");

let garcons = [garcom_1, garcom_2, garcom_3, garcom_4];

// Função para gerar as opções de garçom no select
function gerar_garcom() {
    let select = document.getElementById("garcom");
    garcons.forEach(garcom => {
        let nova_opcao = new Option(garcom.nome, garcom.nome);
        select.options[select.options.length] = nova_opcao;
    });
}

// Chama a função para gerar os garçons no select
gerar_garcom();
