export class Prato{
    private quantidade:number
    private nome:string
    private preco:number
    private descricao:string

    constructor(nome: string, preco: number,descricao:string,quantidade:number=1) {
        this.nome = nome;
        this.preco = preco;
        this.descricao=descricao
        this.quantidade=quantidade
    }

    adicionar_quantidade(n:number){
        this.quantidade= n
        return;
    }
}