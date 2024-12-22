export class Mesa {
    constructor(numero) {
        this.disponibilidade = true;
        ;
        this.numero = numero;
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
