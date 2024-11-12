var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        this.livros.forEach(function (book) {
            console.log("".concat(book.titulo, ", ").concat(book.autor));
        });
    };
    return Biblioteca;
}());
var livro_01 = new Livro("Dragões de Eter", "Raphaell Dracon", 30);
var livro_02 = new Livro("A seleção", "Julia M", 50);
var livro_03 = new Livro("Depois de você", "Jojo Moyes", 40);
var biblioteca_01 = new Biblioteca();
biblioteca_01.adicionarLivro(livro_01);
biblioteca_01.adicionarLivro(livro_02);
biblioteca_01.adicionarLivro(livro_03);
biblioteca_01.ListarLivros();
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    function LivroDigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this;
        _this.formato = formato;
        return _this;
    }
    LivroDigital.prototype.descricao = function () {
        return "Detalhes do livro - t\u00EDtulo : ".concat(this.titulo, "; autor(a): ").concat(this.autor, "; pre\u00E7o: R$ ").concat(this.preco.toFixed(2), "; Formato:").concat(this.formato);
    };
    return LivroDigital;
}(Livro));
var livro_digital = new LivroDigital("a culpa é da estrelas", "John Green", 45.00, "PDF");
console.log(livro_digital.descricao());
