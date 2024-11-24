class Produto{
    private nome:string;
    private preco:number;
    constructor(nome:string, preco:number){
        this.nome=nome
        this.preco=preco
    }
    getPreco():void{
        console.log(`${this.preco.toFixed(2)}`)
    }
    setNovoPreco(valor:number):void{
        if (valor>0){
            this.preco=valor
        }  else{
            console.log("colega, o que você está fazendo?")
        }
    }
}

let p1=new Produto("maçã",2.50)
p1.getPreco()
p1.setNovoPreco(-9)