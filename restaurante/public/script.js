import { Prato } from "../dist/Prato.js"
import {Mesa} from "../dist/Mesa.js"

let item1 = new Prato('X-Braga', 13, 'Pão, Hambúrguer Smash, Cheddar e Molho da casa ' )
let item2 = new Prato('Duplo Braga', 20, 'Pão, 2 Hambúrguer Smash, Cheddar e Molho da casa ')
let item3 = new Prato('Clássico Bacurau', 15, 'Pão, Hambúrguer de Crane de Sol, Queijo de Coalho, Cebola Roxa e Molho da casa')
let item4 = new Prato('Garcia Burguer', 16, 'Pão, Hambúrguer de Frango, Queijo sem lactose e Molho da casa')
let item5 = new Prato('Felix Vegetariano', 17, 'Pão, Hambúrguer de Soja assado na brasa, Alface, Tomate, Cebola e Molho da casa')
let item6 = new Prato('Batata Arante', 10, 'Batatas Fritas com tempero do chefe (acompanha Molho da casa)')
let item7 = new Prato('Batata Arante com Cheddar e Bacon', 15, 'Batatas Fritas com tempero do chefe, Cheddar e Bacon (acompanha Molho da casa)')
let item8 = new Prato('Anéis de Farias', 12, 'Anéis de Cebola fritos (acompanha molho)')
let item9 = new Prato('Giva Shake de Morango', 16, 'Milk Shake de morango com calda de morango batido na hora')
let item10 = new Prato('Giva Shake de Ninho com Nutella', 18, 'Milk Shake de Ninho com cobertura de Nutella batido na hora')
let item11 = new Prato('Petit Gateau a La França', 22, 'Petit Gateau de chocolate com soverte de creme e calda de chocolate')
let item12 = new Prato('Refrigerante 2L', 15, 'Coca-Cola, Cajuína, Guaraná, Sprite')
let item13 = new Prato('Refrigerante 1L', 10, 'Coca-Cola, Cajuína, Guaraná, Pepsi')
let item14 = new Prato('Refrigerante Latinha', 6, 'Coca-Cola, Guaraná, Sprite')
let item15 = new Prato('Suco (Copo)', 7, 'Limão, Morango, Maracujá e Laranja')
let item16 = new Prato('Suco (Jarra)', 15, 'Limão, Morango, Maracujá e Laranja')

let pratos=[item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16]



function gerar_Pratos() {
  const tabela = document.getElementById('tabela_pratos'); // Acessa a tabela pelo id
  tabela.innerHTML = ""; // Limpa qualquer conteúdo existente na tabela antes de adicionar novos dados

  // Cria a primeira linha da tabela com os cabeçalhos
  const cabecalho = document.createElement('tr');
  cabecalho.innerHTML = `
      <th>Nome</th>
      <th>Preço</th>
      <th>Descrição</th>
  `;
  tabela.appendChild(cabecalho);

  // Adiciona as linhas dos pratos na tabela
  pratos.forEach(prato => {
      const linha = document.createElement('tr'); // Cria uma nova linha

      // Preenche a linha com os dados de cada prato
      linha.innerHTML = `
          <td>${prato.nome}</td>
          <td>R$ ${prato.preco.toFixed(2)}</td>
          <td>${prato.descricao}</td>
      `;
      
      // Adiciona a linha na tabela
      tabela.appendChild(linha);
  });
}

// Chama a função para gerar os pratos na tabela
gerar_Pratos();

let mesa1= new Mesa("mesa1")
let mesa2= new Mesa("mesa2")
let mesa3= new Mesa("mesa3")
let mesa4= new Mesa("mesa4")
let mesa5= new Mesa("mesa5")
let mesa6= new Mesa("mesa6")
let mesa7= new Mesa("mesa7")
let mesa8= new Mesa("mesa8")
let mesa9= new Mesa("mesa9")
let mesa10= new Mesa("mes10")

let mesas_restaurante =[mesa1, mesa2, mesa3, mesa4, mesa5, mesa6, mesa7, mesa8, mesa9, mesa10]

function gerar_mesa() {
  let select=document.getElementById("mesa");
  mesas_restaurante.forEach(mesa => {
    let nova_opcao=new Option(mesa.nome,mesa.nome);
    select.options[select.options.length] = nova_opcao;
  });
}

// Chama a função para gerar as mesas no select
gerar_mesa();
