abstract class Animal{
    constructor(protected nome:string){}
    abstract comunicar():string;
}

class Dog extends Animal{
    comunicar(): string {
        return `O cachorro ${this.nome} faz au au`
    }
}

class Passaro extends Animal{
    comunicar(): string {
        return `O pássaro ${this.nome} faz piu-piu`
    }
}

function SomAnimais(animais: Animal[]): void{
    animais.forEach(animal => {
        console.log(animal.comunicar())
    });
}

let dog=new Dog("Bold");
let bird=new Passaro("Red");

let animais: Animal[]=[dog,bird]

SomAnimais(animais)