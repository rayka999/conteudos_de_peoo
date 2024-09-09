let cor='azul';

function mostrar_cor() {
    cor = 'vermelha'; //altera variável cor
    return (cor);
}

console.log('cor dentro da função: ', mostrar_cor())
console.log('cor fora da função', cor)
//Saidas= vermelha

let color='azul';

function m_color() {
    let color = 'vermelha'; //não altera a cor, pois é uma variável diferente
    return (color);
}

console.log('cor dentro da função: ', m_color())
console.log('cor fora da função', color)
//saída 1= vermelha
//saída 2+azul

//escopo - significa abrangência.
//existem dois tipos: Global (a variável é visível por todo o programa)
// e Local (vista apenas para uma função, por exemplo)

/*módulo Closure- significa fechamento
Serve para proteger as variáveis, evita sua mundança.
Closures ocorrem quando uma função "lembra" o escopo em 
que foi criada, mesmo após esse escopo ter sido encerrado. 
Elas são especialmente úteis quando você deseja criar funções 
que mantêm um estado interno privado.

Encapsulamento: faz o mesmo que Closure*/

//ctrl+f5 e depois seleciona node.js= console de depuração