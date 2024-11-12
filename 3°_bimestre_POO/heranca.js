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
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        console.log("Som do animal");
    };
    Animal.prototype.mover = function (distancia) {
        console.log("".concat(this.nome, " se moveu ").concat(distancia, " metros."));
    };
    return Animal;
}());
var animal_01 = new Animal("gato");
animal_01.emitirSom();
animal_01.mover(10);
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome, raca) {
        var _this = _super.call(this, nome) || this; //imita o construtor das propriedades da classe Animal
        _this.raca = raca;
        return _this;
    }
    Gato.prototype.emitirSom = function () {
        console.log("miau");
    };
    Gato.prototype.ronronar = function () {
        console.log("rooo rooo");
    };
    return Gato;
}(Animal));
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome) || this; //imita o construtor das propriedades da classe Animal
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("au au");
    };
    return Cachorro;
}(Animal));
var cat = new Gato("felix", " Persian");
cat.emitirSom();
cat.mover(10);
cat.ronronar();
var animais = [new Animal("Onça"),
    new Cachorro("bolt"),
    new Gato("Garfield", "Americano")]; //array de animais
animais.forEach(function (bicho) {
    bicho.emitirSom();
});
/*Polimorfismo:o mesmo método pode se comportar
 de maneiras diferentes dependendo do objeto que o
 chama. No exemplo acima da seção anterior, o método
  emitirSom foi redefinido na classe Cachorro para emitir
   um som específico. */ 
