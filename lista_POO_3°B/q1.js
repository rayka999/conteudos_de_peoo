var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.autor = autor;
        this.titulo = titulo;
        this.preco = preco;
    }
    Livro.prototype.descricao = function () {
        return "Detalhes do livro - t\u00EDtulo : ".concat(this.titulo, "; autor(a): ").concat(this.autor, "; pre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro_01 = new Livro("Dragões de Eter", "Raphaell Dracon", 30);
console.log(livro_01.descricao());
