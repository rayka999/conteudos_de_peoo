"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenvolvedor = void 0;
var funcionario_1 = require("./funcionario");
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, nivel) {
        var _this = _super.call(this, nome, salario) || this;
        _this._nivel = nivel;
        return _this;
    }
    Desenvolvedor.prototype.promover = function () {
        switch (this._nivel) {
            case "Junior":
                this._salario = this._salario * (1.1);
                break;
            case "Pleno":
                this._salario = this._salario * (1.2);
                break;
            case "Senior":
                this._salario = this._salario * (1.3);
                break;
            default:
                console.log('Nível inválido para promoção');
        }
        console.log("O novo sal\u00E1rio de ".concat(this.Nome, " \u00E9 ").concat(this.Salario.toFixed(2)));
    };
    Object.defineProperty(Desenvolvedor.prototype, "Nivel", {
        get: function () {
            return this._nivel;
        },
        set: function (novoNivel) {
            if (novoNivel === "Junior" || novoNivel === "Pleno" || novoNivel === "Senior") {
                this._nivel = novoNivel;
            }
            else {
                console.log("Nível inválido");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Desenvolvedor;
}(funcionario_1.Funcionario));
exports.Desenvolvedor = Desenvolvedor;
