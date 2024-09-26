//saídas diferentes, pois uma é global e a outra local

let cor='azul';

function mostrarCor() {
    let cor='vermelha';
    console.log(cor);
}

mostrarCor();
console.log(cor);

//saídas iguais,pois altera a local altera a local

let num=2;

function mostrarNum() {
    num=4;
    console.log(num)
}

mostrarNum()
console.log(num)