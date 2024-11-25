var Carro = /** @class */ (function () {
    function Carro(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    Carro.prototype.exibirInformacoes = function () {
        console.log("Modelo: ".concat(this.modelo, ", Cor: ").concat(this.cor, ", Ano: ").concat(this.ano));
    };
    return Carro;
}());
var celta = new Carro("Celta", "Vermelho", 2005);
celta.exibirInformacoes();
