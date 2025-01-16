"use strict";
class Cachorro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mover(modo) {
        console.log(`${this.nome} está se movendo por ${modo}`);
    }
}
const cachorro = new Cachorro("Max", 5);
cachorro.mover("carro"); // Max está se movendo por carro
/*Classes abstratas são classes que não podem ser instanciadas
 diretamente. Elas servem como modelo para outras classes. Diferente
  das interfaces, as classes abstratas podem conter tanto a
  implementação dos métodos quanto apenas a sua assinatura,
funcionando como um meio termo entre uma classe comum e uma interface. */
class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }
    parar() {
        console.log(`O veículo da marca ${this.marca} parou.`);
    }
}
class Carro extends Veiculo {
    ligar() {
        console.log(`O carro da marca ${this.marca} está ligado.`);
    }
}
const meuCarro = new Carro("Toyota");
meuCarro.ligar(); // O carro da marca Toyota está ligado.
meuCarro.parar(); // O veículo da marca Toyota parou.
