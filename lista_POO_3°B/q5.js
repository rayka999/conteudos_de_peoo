var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            total += produto.preco;
        }
        return total;
    };
    return CarrinhoDeCompras;
}());
var produto1 = new Produto("Camiseta", 50.00);
var produto2 = new Produto("Calça Jeans", 120.00);
var produto3 = new Produto("Tênis", 200.00);
var carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);
console.log("Total do Carrinho: R$ ".concat(carrinho.calcularTotal().toFixed(2)));
