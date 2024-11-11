class Endereco {
    rua: string;
    cidade: string;
    cep: string;
     
    constructor (rua:string, cidade: string, cep: string) {
        this.rua=rua;
        this.cidade=cidade;
        this.cep=cep;
    }
}

class Pessoa {
    nome: string;
    endereco: Endereco;

    constructor(nome:string, endereco: Endereco){
        this.nome=nome;
        this.endereco=endereco;
    }
    mostrarEndereco() :string{
        return `Rua:${this.endereco.rua},Cidade: ${this.endereco.cidade}, Cep:${this.endereco.cep}`
    }
}

let endereco_1=new Endereco("Praça da Sé","São Paulo","01001-000");
let pessoa_01=new Pessoa("Luana",endereco_1)
console.log(pessoa_01.mostrarEndereco())