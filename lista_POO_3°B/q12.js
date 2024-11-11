var Endereco = /** @class */ (function () {
    function Endereco(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
    return Endereco;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Pessoa.prototype.mostrarEndereco = function () {
        return "Rua:".concat(this.endereco.rua, ",Cidade: ").concat(this.endereco.cidade, ", Cep:").concat(this.endereco.cep);
    };
    return Pessoa;
}());
var endereco_1 = new Endereco("Praça da Sé", "São Paulo", "01001-000");
var pessoa_01 = new Pessoa("Luana", endereco_1);
console.log(pessoa_01.mostrarEndereco());
