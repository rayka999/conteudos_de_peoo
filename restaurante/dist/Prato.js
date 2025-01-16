export class Prato {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
    adicionar_quantidade(n) {
        this.quantidade = n;
        return;
    }
}
