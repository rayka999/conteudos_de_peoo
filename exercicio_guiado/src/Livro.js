"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const ItemBiblioteca_js_1 = require("./ItemBiblioteca.js");
class Livro extends ItemBiblioteca_js_1.ItemBiblioteca {
    constructor(titulo, anoPublicacao, autor, numeroPaginas) {
        super(titulo, anoPublicacao);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    exibirInformacoes() {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Páginas: ${this.numeroPaginas}`;
    }
}
exports.Livro = Livro;
