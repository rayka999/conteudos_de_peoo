interface pagamento{
    
    realizarPagamento(valor:number):void;
}

class PagamentoComCartao implements pagamento{
    constructor(public saldo:number){}
    realizarPagamento(valor: number): void {
        if (valor<= this.saldo){
            this.saldo-= valor*1.05
            console.log (`Pagamento realizado. Saldo atual de R$ ${this.saldo}`)
        }
    }
}

class PagamentoComBoleto implements pagamento{
    constructor(public saldo:number){}
    realizarPagamento(valor: number): void {
        if (valor<= this.saldo){
            this.saldo-= valor
            console.log (`Pagamento realizado. Saldo atual de R$ ${this.saldo}`)
        }
    }
}