var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.adicionarEstoque = function (qtd) {
        if (qtd > 0) {
            this.quantidade += qtd;
        }
        else {
            console.log("valor inválido");
        }
    };
    Produto.prototype.vender = function (qtd) {
        if (qtd > 0 && qtd <= this.quantidade) {
            this.quantidade -= qtd;
        }
        else {
            console.log("valor inválido");
        }
    };
    Object.defineProperty(Produto.prototype, "Quantidade", {
        get: function () {
            return this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "Preco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "total", {
        get: function () {
            return this.Quantidade * this.Preco;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var produto = new Produto("Produto A", 50, 10);
console.log("Estoque inicial: ".concat(produto.Quantidade)); // 10
produto.adicionarEstoque(5);
console.log("Estoque ap\u00F3s adi\u00E7\u00E3o: ".concat(produto.Quantidade)); // 15
produto.vender(3);
console.log("Estoque ap\u00F3s venda: ".concat(produto.Quantidade)); // 12
console.log("Total em estoque: R$".concat(produto.total)); // Total em estoque: 600
