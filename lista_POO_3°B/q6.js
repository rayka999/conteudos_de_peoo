var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente ou valor inválido.');
        }
    };
    ContaBancaria.prototype.mostrarSaldo = function () {
        return "Caro(a) ".concat(this.titular, ", O saldo dipon\u00EDvel \u00E9 ").concat(this.saldo);
    };
    return ContaBancaria;
}());
var conta_01 = new ContaBancaria(1000, 'John');
conta_01.depositar(500);
console.log(conta_01.mostrarSaldo());
conta_01.sacar(200);
console.log(conta_01.mostrarSaldo());
