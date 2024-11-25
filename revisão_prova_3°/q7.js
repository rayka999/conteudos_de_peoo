var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
    }
    Livro.prototype.resumo = function () {
        console.log("Titulo:".concat(this.titulo, ",Autor:").concat(this.autor, ",Ano de Publica\u00E7\u00E3o:").concat(this.anoPublicacao));
    };
    return Livro;
}());
var livro_1 = new Livro("dragões de eter", "Raphael Dracon", 2011, 234);
livro_1.resumo();
