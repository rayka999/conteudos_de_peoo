var carro = /** @class */ (function () {
    function carro(marca, modelo, ano) {
        if (ano === void 0) { ano = 2022; }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    return carro;
}());
var carro_com = new carro("Chevrolet", "Onix", 2024);
var carro_sem = new carro("Toyota", "Corolla");
console.log(carro_com.ano);
console.log(carro_sem.ano);
