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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(valor) {
        this.valor = valor;
    }
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.calcularSaldo = function () {
        console.log("O valor na sua conta \u00E9 R$ ".concat(this.valor));
    };
    return ContaCorrente;
}(ContaBancaria));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.calcularSaldo = function () {
        this.valor = this.valor * (1 + (3 / 100));
        console.log("O valor rendendo a 3% na poupan\u00E7a agora \u00E9 de R$ ".concat(this.valor));
    };
    return ContaPoupanca;
}(ContaBancaria));
var conta_1 = new ContaCorrente(1000);
var conta_2 = new ContaPoupanca(1000);
conta_1.calcularSaldo();
conta_2.calcularSaldo();
