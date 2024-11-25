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
    Funcionario.prototype.detalhes = function () { };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario) {
        var _this = _super.call(this, nome, salario) || this;
        _this.equipe = [];
        return _this;
        //this.equipe.push(funcionario)
    }
    Gerente.prototype.adicionarfuncionario = function (funcionario) {
        this.equipe.push(funcionario);
    };
    Gerente.prototype.detalhes = function () {
        console.log("a equipe do gerente ".concat(this.nome, " \u00E9 formada por:"));
        this.equipe.forEach(function (trabalhador) {
            console.log(trabalhador.nome);
        });
    };
    return Gerente;
}(Funcionario));
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, linguagem) {
        var _this = _super.call(this, nome, salario) || this;
        _this.linguagemFavorita = linguagem;
        return _this;
    }
    Desenvolvedor.prototype.detalhes = function () {
        console.log("a linguagem favorita de ".concat(this.nome, " \u00E9 ").concat(this.linguagemFavorita));
    };
    return Desenvolvedor;
}(Funcionario));
var funcionario1 = new Funcionario("Ana", 3500);
var funcionario2 = new Funcionario("Carlos", 4200);
var desenvolvedor1 = new Desenvolvedor("Julia", 5000, "JavaScript");
var desenvolvedor2 = new Desenvolvedor("Pedro", 5500, "TypeScript");
var gerente = new Gerente("Ricardo", 7000);
gerente.adicionarfuncionario(funcionario1);
gerente.adicionarfuncionario(funcionario2);
desenvolvedor1.detalhes();
gerente.detalhes();
