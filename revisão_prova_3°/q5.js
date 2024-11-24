var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getPreco = function () {
        console.log("".concat(this.preco.toFixed(2)));
    };
    Produto.prototype.setNovoPreco = function (valor) {
        if (valor > 0) {
            this.preco = valor;
        }
        else {
            console.log("colega, o que você está fazendo?");
        }
    };
    return Produto;
}());
var p1 = new Produto("maçã", 2.50);
p1.getPreco();
p1.setNovoPreco(-9);
