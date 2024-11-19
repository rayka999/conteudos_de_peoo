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
var veiculo = /** @class */ (function () {
    function veiculo() {
    }
    veiculo.prototype.acelerar = function () { };
    veiculo.prototype.frear = function () { };
    return veiculo;
}());
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarroEletrico.prototype.frear = function () {
        console.log("O sistema do carro freiou");
    };
    CarroEletrico.prototype.acelerar = function () {
        console.log("o botão para acelerar foi acionado");
    };
    return CarroEletrico;
}(veiculo));
var CarroCombustão = /** @class */ (function (_super) {
    __extends(CarroCombustão, _super);
    function CarroCombustão() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarroCombustão.prototype.acelerar = function () {
        console.log("a marcha foi passada");
    };
    CarroCombustão.prototype.frear = function () {
        console.log("o motorista enfiou o pé no freio");
    };
    return CarroCombustão;
}(veiculo));
var elet = new CarroEletrico();
var meca = new CarroCombustão();
elet.acelerar();
meca.acelerar();
elet.frear();
meca.frear();
