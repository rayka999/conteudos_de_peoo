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
var conta = /** @class */ (function () {
    function conta(saldoInicial) {
        this.saldo = saldoInicial;
    }
    conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito realizado: R$ ".concat(valor));
        }
        else {
            console.log('Valor de depósito deve ser positivo.');
        }
    };
    conta.prototype.consultarSaldo = function () {
        console.log("Saldo atual: ".concat(this.saldo));
    };
    return conta;
}());
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(saldoInicial, taxaRendimento) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        if (taxaRendimento === void 0) { taxaRendimento = 0.05; }
        var _this = _super.call(this, saldoInicial) || this;
        _this.taxaRendimento = taxaRendimento;
        return _this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        if (valor > 0) {
            var valorComRendimento = valor * (1 + this.taxaRendimento);
            this.saldo += valorComRendimento;
            console.log("Dep\u00F3sito realizado: R$ ".concat(valor.toFixed(2), " + R$ ").concat((valor * this.taxaRendimento).toFixed(2), " de rendimento"));
        }
        else {
            console.log('Valor de depósito deve ser positivo.');
        }
    };
    ContaPoupanca.prototype.consultarSaldo = function () {
        console.log("Saldo atual da Conta Poupan\u00E7a: R$ ".concat(this.saldo.toFixed(2)));
    };
    return ContaPoupanca;
}(conta));
var conta1 = new conta(1000);
conta1.consultarSaldo();
conta1.depositar(500);
conta1.consultarSaldo();
var conta2 = new ContaPoupanca(1000, 0.05);
conta2.consultarSaldo();
conta2.depositar(500);
conta2.consultarSaldo();
