/*- 
A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de "objetos" e
 "classes". Esses objetos representam entidades com características e 
 comportamentos, tornando o código mais organizado, reutilizável e intuitivo. 
**Classe**: Um modelo para criar objetos. Define atributos e métodos que um objeto criado a partir dela possuirá.
- **Objeto**: Uma instância (concretização) da classe, que representa um "objeto real" no código, com atributos e comportamentos específicos.
## Abstração

Habilidade de modelar características do mundo real para o mundo
 computacional, concentrando-se apenas nos aspectos essenciais 
 para o sistema.

 A classe representa um conjunto de objetos com características comuns (comportamentos e atributos comuns). 
 Já o objeto é uma instância (ocorrência) da classe. 

  atributo como sendo a identidade do objeto, definindo o seu estado; e um método como sendo o comportamento 
  desse objeto, algo que ele faz.
*/

//Exemplo de classe em TypeScript

class Pessoa { //classe
    nome: string;//atributo
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string { //metodo e tipo de retorno
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é João e tenho 30 anos.
