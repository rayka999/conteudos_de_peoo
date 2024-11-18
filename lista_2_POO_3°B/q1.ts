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

type livro=Livro

interface Repositorio{
    adicionar(book:livro):void;
    remover(book:livro):void;
    buscar(book:livro):void;
}

class RepositorioDeLivros implements Repositorio{
    repositorio: Livro[]=[];
    adicionar(book:livro):void{
        this.repositorio.push(book)
    }
    remover(book: livro): void {
        let indice=this.repositorio.indexOf(book);
        if (indice !== -1) {
          this.repositorio.splice(indice, 1);
        }
    }
    buscar(book: livro): void {
        if (this.repositorio.indexOf(book) !== -1) {
            console.log("Item encontrado!");
          } else {
            console.log("Item não encontrado.");
          }
    }
}

let livro_01= new Livro("Dragões de Eter","Raphaell Dracon", 30)
let livro_02= new Livro("A seleção","Julia M", 50)
let livro_03= new Livro("Depois de você","Jojo Moyes", 40)

let repositorio_1=new RepositorioDeLivros();
repositorio_1.adicionar(livro_01)
repositorio_1.adicionar(livro_02)
repositorio_1.adicionar(livro_03)
repositorio_1.remover(livro_02)
repositorio_1.buscar(livro_03)
repositorio_1.buscar(livro_02)