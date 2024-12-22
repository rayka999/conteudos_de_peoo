import { Mesa } from "./Mesa";
import { Pedido } from "./Pedido";
export class Garcom{
    private nome:string
    private disponibilidade:boolean=true
    private taxa:number=0.05

    constructor(nome:string){
        this.nome=nome
    }

    registrarPedido(mesa: Mesa, pedido: Pedido): void {
        mesa.realizarPedido(pedido);
        console.log(`Garçom ${this.nome} registrou o pedido para a mesa ${mesa.numero}.`);
    }

    calcularConta(mesa: Mesa): number {
        let total = mesa.calcularConta();
        let total_com_taxa=total*(1+this.taxa);
        console.log(`Conta total para a mesa ${mesa.numero}: R$ ${total_com_taxa.toFixed(2)}`);
        return total_com_taxa;
    }

    atualizarMesa(mesa: Mesa, status: boolean): void {
        mesa.atualizarDisponibilidade(status);
        let statusMesa = status ? 'disponível' : 'indisponível';
        console.log(`Mesa ${mesa.numero} está ${statusMesa}.`);
    }
}