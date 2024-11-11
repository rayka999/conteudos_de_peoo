class ContaBancaria {
    private saldo: number;
    private titular: string;

    constructor(saldo: number, titular: string) {
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente ou valor inválido.');
        }
    }

    mostrarSaldo(): string {
        return `Caro(a) ${this.titular}, O saldo diponível é ${this.saldo}`;
    }
}

let conta_01 = new ContaBancaria(1000, 'John');

conta_01.depositar(500); 
console.log(conta_01.mostrarSaldo()); 

conta_01.sacar(200);
console.log(conta_01.mostrarSaldo()); 