/* Comandos no terminal para configurar o ambiente

npm install -g typescript
npx tsc --version
cd nome_da_pasta
npx tsc nome_arquivo.ts
node .\nome_do_arquivo.js roda o código
*/

/* Os modificadores de acesso são essenciais para controlar a visibilidade dos atributos e métodos.

- `public`: Acesso livre a partir de qualquer lugar.
- `private`: Acesso restrito, apenas dentro da própria classe.
- `protected`: Acesso permitido na própria classe e nas classes filhas. */

// exemplo de uso de modificadores de acesso

class Carro {
    private modelo: string;
    protected ano: number;
    public marca: string;

    constructor(modelo: string, ano: number, marca: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
    }

    public detalhesDoCarro(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro1 = new Carro("Civic", 2020, "Honda");
console.log(carro1.detalhesDoCarro()); // Saída: Marca: Honda, Modelo: Civic, Ano: 2020

/* O encapsulamento é uma prática que visa proteger os dados dos objetos,
 permitindo acesso apenas através de métodos específicos (getters e setters).
 
 O construtor é um método especial que é executado automaticamente quando uma 
 nova instância de uma classe é criada. Ele é usado para inicializar os atributos do objeto.

Herança é um mecanismo que permite criar uma nova classe com base em uma classe existente,
 herdando seus atributos e métodos.

 O polimorfismo permite que métodos em classes derivadas tenham comportamentos diferentes. 

 */

 //exemplo

 class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som do animal");
    }
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    emitirSom(): void {
        console.log("Latido");
    }
}

const dog = new Cachorro("Bolt");
dog.emitirSom(); // Saída: Latido

//exemplo classe

class circulo { //classe
    raio: number; //atributo
    x: number; //atributo
    y: number; //atributo

    constructor (raio: number, x: number, y: number) {
        this.raio=raio;
        this.x=x;
        this.y=y; //this faz a referencia ao atributo
    }
    exibir() :string { //metodo e tipo de retorno
        return `Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`
    }
    mover (x: number, y: number) : void {
        this.x +=x;
        this.y +=y //this.y = this.y + y
        //void quer dizer que não retorna nenhum tipo específico
    }
    aumentar (r: number) :void {
        this.raio += r
    }
}

let circulo_1= new circulo(2,0,0) //objeto
console.log(circulo_1.exibir())