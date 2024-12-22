export class Prato{
    private quantidade:number
    private nome:string
    private preco:number

    constructor(nome: string, preco: number,quantidade:number=1) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade=quantidade
    }

}