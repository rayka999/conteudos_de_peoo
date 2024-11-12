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
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.ListarLivros = function () {
        livros.forEach(function (book) {
            console.log("".concat(book.titulo, ", ").concat(book.autor));
        });
    };
    return Biblioteca;
}());
