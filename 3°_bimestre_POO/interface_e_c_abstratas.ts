/*Interfaces são usadas para definir uma estrutura ou
 contrato que uma classe precisa seguir. Elas não contêm 
 implementação, apenas definem os atributos e métodos que
  devem ser usados. */
type ModoDeTransporte = "carro" | "avião" | "navio"

interface Animal {
  nome: string;
  idade: number;
  mover(modo: ModoDeTransporte): void;
}

class Cachorro implements Animal {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mover(modo: ModoDeTransporte): void {
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

abstract class Veiculo {
  constructor(public marca: string) {}

  abstract ligar(): void; // método abstrato, deve ser implementado pelas subclasses

  parar(): void {
    console.log(`O veículo da marca ${this.marca} parou.`);
  }
}

class Carro extends Veiculo {
  ligar(): void {
    console.log(`O carro da marca ${this.marca} está ligado.`);
  }
}

const meuCarro = new Carro("Toyota");
meuCarro.ligar(); // O carro da marca Toyota está ligado.
meuCarro.parar(); // O veículo da marca Toyota parou.