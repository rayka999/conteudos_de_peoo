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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, bonus) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonus = bonus;
        return _this;
    }
    Gerente.prototype.calcularSalarioTotal = function () {
        return this.salario + this.bonus;
    };
    return Gerente;
}(Funcionario));
var funcionario_01 = new Funcionario("Jorge", 1500);
var gerente_01 = new Gerente("Francisco", 1500, 200);
console.log(gerente_01.calcularSalarioTotal());
