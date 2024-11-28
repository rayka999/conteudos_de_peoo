abstract class ContaBancaria {

    constructor(protected valor:number){}

    abstract calcularSaldo():void
}

class ContaCorrente extends ContaBancaria{
    calcularSaldo(): void {
        console.log(`O valor na sua conta é R$ ${this.valor}`)
    }
}

class ContaPoupanca extends ContaBancaria{
    calcularSaldo(): void {
        this.valor=this.valor*(1+(3/100))
        console.log(`O valor rendendo a 3% na poupança agora é de R$ ${this.valor}`)
    }
}

let conta_1=new ContaCorrente(1000)
let conta_2=new ContaPoupanca(1000)

conta_1.calcularSaldo()
conta_2.calcularSaldo()