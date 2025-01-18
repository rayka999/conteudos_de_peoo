export class Prato {
    constructor(nome, preco, descricao, quantidade = 1) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }
    adicionar_quantidade(n) {
        this.quantidade = n;
        return;
    }
}
