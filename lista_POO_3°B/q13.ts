class conta{
    public saldo:number;

    constructor(saldo:number){
        this.saldo=saldo;
    }

    depositar(valor: number):void{
        this.saldo +=valor
    }
}

class ContaPoupanca extends conta{

}