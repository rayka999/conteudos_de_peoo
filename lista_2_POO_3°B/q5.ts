interface Autenticavel {
    autenticar(senha:string):boolean;
}

class Usuario implements Autenticavel {
    private senha: string;

    constructor(senha: string) {
        this.senha = senha;
    }

    autenticar(senha: string): boolean {
        return this.senha === senha;
    }
}

class Administrador implements Autenticavel {
    private senha: string;
    private tokenDeSeguranca: string;

    constructor(senha: string, tokenDeSeguranca: string) {
        this.senha = senha;
        this.tokenDeSeguranca = tokenDeSeguranca;
    }

    autenticar(senha: string): boolean {
        return this.senha === senha && this.tokenDeSeguranca === "TOKEN_SECRETO";
    }
}