"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, diretor, anoLancamento) {
        this._avaliacoes = [];
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
    }
    Object.defineProperty(Filme.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "diretor", {
        get: function () {
            return this._diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "anoLancamento", {
        get: function () {
            return this._anoLancamento;
        },
        set: function (a) {
            if (a > 0) {
                this._anoLancamento = a;
            }
            else {
                console.log("Digite um ano válido");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "Titulo", {
        set: function (t) {
            if (t.length > 0) {
                this._titulo = t;
            }
            else {
                console.log("Digite algum titulo");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "Diretor", {
        set: function (d) {
            if (d.length > 0) {
                this._diretor = d;
            }
            else {
                console.log("Digite algum diretor");
            }
        },
        enumerable: false,
        configurable: true
    });
    Filme.prototype.adicionarAvaliacao = function (nota) {
        if (nota > 1 && nota > 5 || nota == 1 || nota == 5) {
            this._avaliacoes.push(nota);
        }
        else {
            console.log("nota tem que ser entre 1 e 5");
        }
    };
    Filme.prototype.calcularMediaAvaliacoes = function () {
        var media = 0;
        this._avaliacoes.forEach(function (ava) {
            media += ava;
        });
        media = media / (this._avaliacoes.length);
        return media;
    };
    return Filme;
}());
exports.Filme = Filme;
