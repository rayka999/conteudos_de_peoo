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
    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Animal.prototype.falar = function () {
        console.log("O ".concat(this.nome, " emite um som"));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Cachorro.prototype.falar = function () {
        console.log("".concat(this.nome, " late"));
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro("Mel", 2);
cachorro.falar();
