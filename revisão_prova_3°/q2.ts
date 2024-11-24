class ContaBancaria{
    protected titular:string;
    private saldo:number;

    constructor(titular:string,saldo:number){
        this.titular=titular;
        this.saldo=saldo;
    }
    setDepositar(valor:number):void{
        if (valor>0){
            this.saldo+= valor
        } else{
            console.log("valor abaixo de zero. depósito negado")
        }
    }
    setSacar(valor:number):void{
        if (valor>0){
            this.saldo-= valor;
        } else{
            console.log("valor abaixo de zero. Saque negado")
        }
    }
    getConsultarSaldo():void{
        console.log(this.saldo)
    }
}

let conta=new ContaBancaria("Alex", 1500)
conta.setDepositar(500)
conta.setSacar(250)
conta.getConsultarSaldo()
