"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "Salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "Nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
exports.Funcionario = Funcionario;
