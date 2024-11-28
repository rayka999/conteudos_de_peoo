interface Servico{
    trabalhador:string
    executar():void;
}

class ServicoDeEntrega implements Servico{
    trabalhador: string;
    constructor (trabalhador:string){
        this.trabalhador=trabalhador
    }
    executar():void{
        console.log(`O motoboy ${this.trabalhador} fez a entrega`)
    }
}

class ServicoDeMontagem implements Servico{
    trabalhador: string;
    constructor (trabalhador:string){
        this.trabalhador=trabalhador
    }
    executar():void{
        console.log(`${this.trabalhador} fez a montagem do aparelho`)
    }
}

let ENt=new ServicoDeEntrega("Diogo")
let Mon= new ServicoDeMontagem("Diana")

ENt.executar()
Mon.executar()