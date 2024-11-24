class Animal{
    protected nome:string;
    protected idade:number;

    constructor(nome:string, idade:number){
        this.nome=nome;
        this.idade=idade;
    }
    falar():void{
        console.log(`O ${this.nome} emite um som`)
    }
}

class Cachorro extends Animal{
    constructor(nome:string,idade:number){
        super(nome,idade)
    }
    falar():void {
        console.log(`${this.nome} late`)
    }
}

let cachorro=new Cachorro("Mel", 2)
cachorro.falar()