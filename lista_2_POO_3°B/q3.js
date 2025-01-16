"use strict";
class PagamentoComCartao {
    constructor(saldo) {
        this.saldo = saldo;
    }
    realizarPagamento(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor * 1.05;
            console.log(`Pagamento realizado. Saldo atual de R$ ${this.saldo}`);
        }
    }
}
class PagamentoComBoleto {
    constructor(saldo) {
        this.saldo = saldo;
    }
    realizarPagamento(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Saldo atual de R$ ${this.saldo}`);
        }
    }
}
