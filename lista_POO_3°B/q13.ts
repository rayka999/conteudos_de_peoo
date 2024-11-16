class conta{
    public saldo:number;

    constructor(saldoInicial:number){
        this.saldo=saldoInicial;
    }

    depositar(valor: number):void{
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito realizado: R$ ${valor}`);
          } else {
            console.log('Valor de depósito deve ser positivo.');
          }
    }
    consultarSaldo():void{
        console.log (`Saldo atual: ${this.saldo}`)
    }
}

class ContaPoupanca extends conta{
    taxaRendimento: number;

  constructor(saldoInicial: number = 0, taxaRendimento: number = 0.05) {
    super(saldoInicial);
    this.taxaRendimento = taxaRendimento;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      const valorComRendimento = valor * (1 + this.taxaRendimento);
      this.saldo += valorComRendimento;
      console.log(`Depósito realizado: R$ ${valor.toFixed(2)} + R$ ${(valor * this.taxaRendimento).toFixed(2)} de rendimento`);
    } else {
      console.log('Valor de depósito deve ser positivo.');
    }
  }

  consultarSaldo(): void {
    console.log(`Saldo atual da Conta Poupança: R$ ${this.saldo.toFixed(2)}`);
  }
}

let conta1 = new conta(1000);
conta1.consultarSaldo();
conta1.depositar(500);
conta1.consultarSaldo();

let conta2 = new ContaPoupanca(1000, 0.05);
conta2.consultarSaldo();
conta2.depositar(500);
conta2.consultarSaldo();