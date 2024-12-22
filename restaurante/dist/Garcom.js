export class Garcom {
    constructor(nome) {
        this.disponibilidade = true;
        this.taxa = 0.05;
        this.nome = nome;
    }
    registrarPedido(mesa, pedido) {
        mesa.realizarPedido(pedido);
        console.log(`Garçom ${this.nome} registrou o pedido para a mesa ${mesa.numero}.`);
    }
    calcularConta(mesa) {
        let total = mesa.calcularConta();
        let total_com_taxa = total * (1 + this.taxa);
        console.log(`Conta total para a mesa ${mesa.numero}: R$ ${total_com_taxa.toFixed(2)}`);
        return total_com_taxa;
    }
    atualizarMesa(mesa, status) {
        mesa.atualizarDisponibilidade(status);
        let statusMesa = status ? 'disponível' : 'indisponível';
        console.log(`Mesa ${mesa.numero} está ${statusMesa}.`);
    }
}
