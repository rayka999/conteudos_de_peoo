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
var RepositorioDeLivros = /** @class */ (function () {
    function RepositorioDeLivros() {
        this.repositorio = [];
    }
    RepositorioDeLivros.prototype.adicionar = function (book) {
        this.repositorio.push(book);
    };
    RepositorioDeLivros.prototype.remover = function (book) {
        var indice = this.repositorio.indexOf(book);
        if (indice !== -1) {
            this.repositorio.splice(indice, 1);
        }
    };
    RepositorioDeLivros.prototype.buscar = function (book) {
        if (this.repositorio.indexOf(book) !== -1) {
            console.log("Item encontrado!");
        }
        else {
            console.log("Item não encontrado.");
        }
    };
    return RepositorioDeLivros;
}());
var livro_01 = new Livro("Dragões de Eter", "Raphaell Dracon", 30);
var livro_02 = new Livro("A seleção", "Julia M", 50);
var livro_03 = new Livro("Depois de você", "Jojo Moyes", 40);
var repositorio_1 = new RepositorioDeLivros();
repositorio_1.adicionar(livro_01);
repositorio_1.adicionar(livro_02);
repositorio_1.adicionar(livro_03);
repositorio_1.remover(livro_02);
repositorio_1.buscar(livro_03);
repositorio_1.buscar(livro_02);
