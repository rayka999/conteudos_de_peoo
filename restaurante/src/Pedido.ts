import { Prato } from "./Prato";
import { Cliente } from "./Cliente";
export class Pedido {
    cliente: Cliente;
    pratos: Prato[];

    constructor(cliente: Cliente) {
        this.cliente = cliente;
        this.pratos = [];
    }

    adicionarPrato(prato: Prato): void {
        this.pratos.push(prato);
    }

    calcularTotal(): number {
        return this.pratos.reduce((total, prato) => total + (prato.preco*prato.quantidade), 0);
    }
}