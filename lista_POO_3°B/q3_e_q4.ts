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

let livro_01= new Livro("Dragões de Eter","Raphaell Dracon", 30)
let livro_02= new Livro("A seleção","Julia M", 50)
let livro_03= new Livro("Depois de você","Jojo Moyes", 40)

let biblioteca_01= new Biblioteca()
biblioteca_01.adicionarLivro(livro_01)
biblioteca_01.adicionarLivro(livro_02)
biblioteca_01.adicionarLivro(livro_03)
biblioteca_01.ListarLivros()

class LivroDigital extends Livro{
    formato : string;

    constructor(titulo: string, autor: string,preco: number,formato: string){
        super(titulo,autor,preco)
        this.formato=formato;
    }

    descricao(): string{
        return `Detalhes do livro - título : ${this.titulo}; autor(a): ${this.autor}; preço: R$ ${this.preco.toFixed(2)}; Formato:${this.formato}`
    }
}

let livro_digital=new LivroDigital("a culpa é da estrelas","John Green",45.00,"PDF")
console.log(livro_digital.descricao())