"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filme_1 = require("./Filme");
var Catalogo_1 = require("./Catalogo");
function filtrarFilmesPorAno(filmes, ano) {
    var novo_filmes = [];
    filmes.forEach(function (movie) {
        if (movie.anoLancamento >= ano) {
            novo_filmes.push(movie);
        }
    });
    novo_filmes.forEach(function (fil) {
        console.log("".concat(fil.titulo, " , ").concat(fil.anoLancamento));
    });
}
var f1 = new Filme_1.Filme("A Origem", "Christopher Nolan", 2010);
var f2 = new Filme_1.Filme("Interestelar", "Christopher Nolan", 2014);
var f3 = new Filme_1.Filme("Matrix", "Lana e Lilly Wachowski", 1999);
var f4 = new Filme_1.Filme("Pulp Fiction:Tempo de Violência", "Quentin Ta0rantino", 1994);
var f5 = new Filme_1.Filme("Duna", "Denis Villeneuve", 2021);
var catalogo = new Catalogo_1.Catalogo();
catalogo.adicionarFilme(f1);
catalogo.adicionarFilme(f2);
catalogo.adicionarFilme(f3);
catalogo.adicionarFilme(f4);
catalogo.adicionarFilme(f5);
catalogo.listarFilmes();
filtrarFilmesPorAno(catalogo.filmes, 2000);
