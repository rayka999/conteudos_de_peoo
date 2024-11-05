/* Comandos no terminal para configurar o ambiente

npm install -g typescript
npx tsc --version
cd nome_da_pasta
npx tsc nome_arquivo.ts
node .\nome_do_arquivo.js roda o código
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Os modificadores de acesso são essenciais para controlar a visibilidade dos atributos e métodos.

- `public`: Acesso livre a partir de qualquer lugar.
- `private`: Acesso restrito, apenas dentro da própria classe.
- `protected`: Acesso permitido na própria classe e nas classes filhas. */
// exemplo de uso de modificadores de acesso
var Carro = /** @class */ (function () {
    function Carro(modelo, ano, marca) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
    }
    Carro.prototype.detalhesDoCarro = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Carro;
}());
var carro1 = new Carro("Civic", 2020, "Honda");
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
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        console.log("Som do animal");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("Latido");
    };
    return Cachorro;
}(Animal));
var dog = new Cachorro("Bolt");
dog.emitirSom(); // Saída: Latido
//exemplo classe
var circulo = /** @class */ (function () {
    function circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y; //this faz a referencia ao atributo
    }
    circulo.prototype.getRaio = function () {
        return this.raio;
    };
    circulo.prototype.setRaio = function (r) {
        if (r > 15) {
            console.log("limite ultrapassado");
        }
        else if (r < 0) {
            console.log("Você já estudou geometria???");
        }
        else {
            this.raio = r;
        }
    };
    circulo.prototype.exibir = function () {
        return "Raio: ".concat(this.raio, ", X: ").concat(this.x, ", Y: ").concat(this.y);
    };
    circulo.prototype.mover = function (x, y) {
        this.x += x;
        this.y += y; //this.y = this.y + y
        //void quer dizer que não retorna nenhum tipo específico
    };
    circulo.prototype.aumentar = function (r) {
        this.raio += r;
    };
    return circulo;
}());
/*let circulo_1= new circulo(2,0,0) //objeto
console.log(circulo_1.exibir())
circulo_1.aumentar(5)
console.log(circulo_1.exibir())
circulo_1.mover(2,4)
console.log(circulo_1.exibir())*/
var circulo_02 = new circulo(3, 5, 2);
//circulo_02.raio=10 n permitido, pois os atributos são privados
circulo_02.setRaio(-3);
console.log(circulo_02.exibir());
