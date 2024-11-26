"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo() {
        this.filmes = [];
    }
    Catalogo.prototype.adicionarFilme = function (filme) {
        this.filmes.push(filme);
    };
    Catalogo.prototype.listarFilmes = function () {
        this.filmes.forEach(function (filme) {
            console.log("Titulo:".concat(filme.titulo, ", Diretor: ").concat(filme.diretor, ", Ano lan\u00E7amento: ").concat(filme.anoLancamento));
        });
    };
    return Catalogo;
}());
exports.Catalogo = Catalogo;
