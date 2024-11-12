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


class Biblioteca {
    livros: Livro[]=[];

    adicionarLivro(livro: Livro){
        this.livros.push(livro);
    
    }

    ListarLivros() :void{
        this.livros.forEach(book => {
            console.log(`${book.titulo}, ${book.autor}`)
        });
    }
}