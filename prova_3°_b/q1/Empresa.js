"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome) {
        this._funcionarios = [];
        this._nome = nome;
    }
    Object.defineProperty(Empresa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.adicionarFuncionario = function (funcionario) {
        this._funcionarios.push(funcionario);
    };
    Empresa.prototype.listarFunconarios = function () {
        console.log("Funcion\u00E1rios da empresa ".concat(this.nome));
        this._funcionarios.forEach(function (trabalhador) {
            console.log(trabalhador.descricao());
            console.log("----------------------");
        });
    };
    return Empresa;
}());
exports.Empresa = Empresa;
