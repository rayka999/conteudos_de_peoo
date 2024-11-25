class Carro{
    modelo:string;
    cor:string;
    ano:number;

    constructor(modelo:string,cor:string,ano:number){
        this.modelo=modelo
        this.cor=cor
        this.ano=ano
    }
    exibirInformacoes():void{
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`)
    }
}

let celta=new Carro("Celta","Vermelho",2005)
celta.exibirInformacoes()