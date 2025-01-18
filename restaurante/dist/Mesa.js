export class Mesa {
    constructor(nome, numero) {
        this._disponibilidade = true;
        ;
        this.nome = nome;
        this._numero = numero;
    }
    atualizarDisponibilidade(status) {
        this._disponibilidade = status;
    }
    realizarPedido(pedido) {
        this.pedido = pedido;
        this.atualizarDisponibilidade(false); // Mesa não está disponível após o pedido
    }
    calcularConta() {
        if (this.pedido) {
            return this.pedido.calcularTotal();
        }
        return 0;
    }
    get numero() {
        return this._numero;
    }
    get disponibilidade() {
        return this._disponibilidade;
    }
}
