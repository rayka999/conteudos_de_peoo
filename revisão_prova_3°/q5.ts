class Produto{
    private nome:string;
    private preco:number;
    constructor(nome:string, preco:number){
        this.nome=nome
        this.preco=preco
    }
    get Nome():string{
        return this.nome
    }
    get Preco():number{
        return this.preco
    }
    set Preco(valor:number){
        if (valor>0){
            this.preco=valor
        }  else{
            console.log("colega, o que você está fazendo?")
        }
    }
}

let p1=new Produto("maçã",2.50)
console.log(p1.Preco)
console.log(p1.Nome)
p1.Preco=-9