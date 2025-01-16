"use strict";
class Veiculo {
    constructor(marca, modelo, ano) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
    }
    get marca() {
        return this._marca;
    }
    set Marca(m) {
        if (m.length) {
            this._marca = m;
        }
    }
    get Modelo() {
        return this._modelo;
    }
    set Modelo(mod) {
        if (mod.length) {
            this._modelo = mod;
        }
    }
    get Ano() {
        return this._ano;
    }
    set Ano(year) {
        if (year > 0) {
            this._ano = year;
        }
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano, num_portas) {
        super(marca, modelo, ano);
        this.num_portas = num_portas;
    }
    get Numero_portas() {
        return this.num_portas;
    }
}
