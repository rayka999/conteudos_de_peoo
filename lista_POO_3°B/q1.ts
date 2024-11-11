class Livro {
    titulo: string;
    autor: string;
    preco:number;

    constructor(titulo: string, autor: string,preco: number){
        this.autor=autor
        this.titulo=titulo
        this.preco=preco
    }

    descricao(): string{
        return `Detalhes do livro - título : ${this.titulo}; autor(a): ${this.autor}; preço: R$ ${this.preco.toFixed(2)}`
    }
}

let livro_01= new Livro("Dragões de Eter","Raphaell Dracon", 30)
console.log(livro_01.descricao())