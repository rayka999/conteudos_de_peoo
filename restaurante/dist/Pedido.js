export class Pedido {
    constructor(cliente) {
        this.cliente = cliente;
        this.pratos = [];
    }
    adicionarPrato(prato) {
        this.pratos.push(prato);
    }
    calcularTotal() {
        return this.pratos.reduce((total, prato) => total + (prato.preco * prato.quantidade), 0);
    }
}
