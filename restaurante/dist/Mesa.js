export class Mesa {
    constructor(nome, numero) {
        this.disponibilidade = true;
        ;
        this.nome = nome;
        this._numero = numero;
    }
    atualizarDisponibilidade(status) {
        this.disponibilidade = status;
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
}
