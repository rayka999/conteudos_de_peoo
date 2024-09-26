/*
Closures ocorrem quando uma função "lembra" o escopo em que foi criada, 
mesmo após esse escopo ter sido encerrado. Elas são especialmente úteis
 quando você deseja criar funções que mantêm um estado interno privado.

Closures são criados automaticamente quando uma função é declarada dentro
 de outra função, e a função interna faz referência a alguma variável 
 da função externa.
*/

//exemplo

function adicionar(X) {
    return function(Y) {
        return X+Y
    }
}

const mais_5=adicionar(5)
console.log(mais_5(10))

function vezes(X) {
    return function(Y) {
        return X*Y
    }
}

const vezes_2=vezes(2)
console.log(vezes_2(4))