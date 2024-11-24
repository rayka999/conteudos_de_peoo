var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.setDepositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log("valor abaixo de zero. depósito negado");
        }
    };
    ContaBancaria.prototype.setSacar = function (valor) {
        if (valor > 0) {
            this.saldo -= valor;
        }
        else {
            console.log("valor abaixo de zero. Saque negado");
        }
    };
    ContaBancaria.prototype.getConsultarSaldo = function () {
        console.log(this.saldo);
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria("Alex", 1500);
conta.setDepositar(500);
conta.setSacar(250);
conta.getConsultarSaldo();
