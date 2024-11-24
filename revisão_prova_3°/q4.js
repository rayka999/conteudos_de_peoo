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
var Forma = /** @class */ (function () {
    function Forma() {
    }
    Forma.prototype.CalcularArea = function () {
    };
    return Forma;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.CalcularArea = function () {
        console.log(this.lado * this.lado);
    };
    return Quadrado;
}(Forma));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.CalcularArea = function () {
        console.log(3.14 * Math.pow(this.raio, 2));
    };
    return Circulo;
}(Forma));
var quadrado = new Quadrado(4);
quadrado.CalcularArea();
var circulo = new Circulo(2);
circulo.CalcularArea();
