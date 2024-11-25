var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Object.defineProperty(Produto.prototype, "Nome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "Preco", {
        get: function () {
            return this.preco;
        },
        set: function (valor) {
            if (valor > 0) {
                this.preco = valor;
            }
            else {
                console.log("colega, o que você está fazendo?");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var p1 = new Produto("maçã", 2.50);
console.log(p1.Preco);
console.log(p1.Nome);
p1.Preco = -9;
