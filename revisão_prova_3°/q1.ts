class Pessoa {
    private nome:string;
    private idade:number;

    constructor(nome:string, idade:number){
        this.nome=nome;
        this.idade=idade;
    }
    apresentar():string{
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

let person=new Pessoa("Ravi", 7)
console.log(person.apresentar())