"use strict";
class Produto {
    constructor(preco) {
        this.preco = preco;
        this.preco = preco;
    }
}
class ProdutoDigital extends Produto {
    calcularPrecoFinal(frete) {
        return this.preco += frete;
    }
}
class ProdutoFisico extends Produto {
    calcularPrecoFinal(Imposto) {
        return this.preco += Imposto;
    }
}
