"use strict";
class Usuario {
    constructor(senha) {
        this.senha = senha;
    }
    autenticar(senha) {
        return this.senha === senha;
    }
}
class Administrador {
    constructor(senha, tokenDeSeguranca) {
        this.senha = senha;
        this.tokenDeSeguranca = tokenDeSeguranca;
    }
    autenticar(senha) {
        return this.senha === senha && this.tokenDeSeguranca === "TOKEN_SECRETO";
    }
}
