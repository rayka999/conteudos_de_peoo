import { Pedido } from "./Pedido";
export class Mesa {
    private nome:string
    private disponibilidade: boolean=true;
    private pedido:Pedido;

    constructor(nome:string) {;
        this.nome=nome;
    }

    atualizarDisponibilidade(status: boolean): void {
        this.disponibilidade = status;
    }

    realizarPedido(pedido: Pedido): void {
        this.pedido = pedido;
        this.atualizarDisponibilidade(false); // Mesa não está disponível após o pedido
    }

    calcularConta(): number {
        if (this.pedido) {
            return this.pedido.calcularTotal();
        }
        return 0;
    }
}