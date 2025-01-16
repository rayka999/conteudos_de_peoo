"use strict";
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log("Som do animal");
    }
    mover(distancia) {
        console.log(`${this.nome} se moveu ${distancia} metros.`);
    }
}
let animal_01 = new Animal("gato");
animal_01.emitirSom();
animal_01.mover(10);
class Gato extends Animal {
    constructor(nome, raca) {
        super(nome); //imita o construtor das propriedades da classe Animal
        this.raca = raca;
    }
    emitirSom() {
        console.log("miau");
    }
    ronronar() {
        console.log("rooo rooo");
    }
}
class Cachorro extends Animal {
    constructor(nome) {
        super(nome); //imita o construtor das propriedades da classe Animal
    }
    emitirSom() {
        console.log("au au");
    }
}
let cat = new Gato("felix", " Persian");
cat.emitirSom();
cat.mover(10);
cat.ronronar();
let animais = [new Animal("Onça"),
    new Cachorro("bolt"),
    new Gato("Garfield", "Americano")]; //array de animais
animais.forEach(bicho => {
    bicho.emitirSom();
});
/*Polimorfismo:o mesmo método pode se comportar
 de maneiras diferentes dependendo do objeto que o
 chama. No exemplo acima da seção anterior, o método
  emitirSom foi redefinido na classe Cachorro para emitir
   um som específico. */ 
