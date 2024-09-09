/*
//typeof de...
let idade=18
let idadeNumber="18"
console.log(typeof(idade))
console.log(typeof(idadeNumber))
console.log(idade == idadeNumber)
console.log(idade === idadeNumber)

//ternario
console.log((idade>=18)? "Maior" : "Pirralho")

//for
let mult= 0
for (let i=1; i<11; i=i+1) {
    mult=2*i
    console.log(`2 x ${i} = ${mult}`)
}

//do...while
let j=0
do {
    console.log("Número: " + j);
    j++;
} while (j < 5);

//while

let num=2
while (num<5) {
    console.log("numero =" + num)
    num=num+1
}
*/

//função nomeada

function soma (a,b) {
    return a+b
}

//funcao anonima

let produto = function (c,d) {
    return c*d
}

console.log(soma(2,3))
console.log(produto(4,5))

//escopo de variaveis
/* se uma variavel é criada dentro de uma funcao,ela só existe dentro da função. enquanto isso,variaveis criadas fora de uma função funcionam em todo programa*/


function fatorial(n) {
    let fat = 1;
    for (let i=2; i<=n; i++)
        fat = fat * i;
    return fat;
}

console.log(fatorial());