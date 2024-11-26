"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "Nome", {
        set: function (name) {
            if (name.length > 0) {
                this._nome = name;
            }
            else {
                console.log("Digite algum nome");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "Salario", {
        set: function (car) {
            if (car.length > 0) {
                this._cargo = car;
            }
            else {
                console.log("Digite algum cargo");
            }
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aplicarAumento = function (percentual) {
        if (percentual > 0) {
            this._salario = this._salario * (1 + (percentual / 100));
        }
        else {
            console.log("Percentual inválido");
        }
    };
    Funcionario.prototype.descricao = function () {
        return "Nome:".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$ ").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
