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
    Funcionario.prototype.getSalario = function () {
        return "".concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, nivel) {
        var _this = _super.call(this, nome, salario) || this;
        _this.nivel = nivel;
        return _this;
    }
    Desenvolvedor.prototype.promover = function () {
        switch (this.nivel) {
            case "Junior":
                this.salario *= 1.10;
                break;
            case "Pleno":
                this.salario *= 1.15;
                break;
            case "Senior":
                this.salario *= 1.20;
                break;
            default:
                console.log("nível desconhecido");
        }
    };
    return Desenvolvedor;
}(Funcionario));
var devJunior = new Desenvolvedor('Alice', 3000, 'Junior');
console.log("".concat(devJunior.nome, " (Junior): R$ ").concat(devJunior.getSalario()));
devJunior.promover();
console.log("Ap\u00F3s promo\u00E7\u00E3o: R$ ".concat(devJunior.getSalario()));
var devPleno = new Desenvolvedor('Bob', 5000, 'Pleno');
console.log("".concat(devPleno.nome, " (Pleno): R$ ").concat(devPleno.getSalario()));
devPleno.promover();
console.log("Ap\u00F3s promo\u00E7\u00E3o: R$ ".concat(devPleno.getSalario()));
var devSenior = new Desenvolvedor('Carlos', 8000, 'Senior');
console.log("".concat(devSenior.nome, " (Senior): R$ ").concat(devSenior.getSalario()));
devSenior.promover();
console.log("Ap\u00F3s promo\u00E7\u00E3o: R$ ".concat(devSenior.getSalario()));
