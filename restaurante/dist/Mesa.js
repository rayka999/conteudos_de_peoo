export class Mesa {
    constructor(nome) {
        this.disponibilidade = true;
        ;
        this.nome = nome;
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
}
