class Livro{
    public titulo:string
    public autor:string
    public anoPublicacao:number
    public numeroPaginas:number

    constructor(titulo:string,autor:string,anoPublicacao:number,numeroPaginas){
        this.titulo=titulo
        this.autor=autor
        this.anoPublicacao=anoPublicacao
        this.numeroPaginas=numeroPaginas
    }
    resumo():void{
        console.log(`Titulo:${this.titulo},Autor:${this.autor},Ano de Publicação:${this.anoPublicacao}`)
    }
}

let livro_1=new Livro("dragões de eter","Raphael Dracon", 2011,234)
livro_1.resumo()