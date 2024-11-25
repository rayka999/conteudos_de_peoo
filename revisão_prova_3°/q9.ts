class Produto{
    private nome:string;
    private preco:number;
    private quantidade:number;

    constructor(nome:string,preco:number,quantidade:number){
        this.nome=nome
        this.preco=preco
        this.quantidade=quantidade
    }
     adicionarEstoque(qtd:number){
        if (qtd>0){
            this.quantidade+=qtd
        } else{
            console.log("valor inválido")
        }
    }

    vender(qtd:number){
        if(qtd>0 && qtd<=this.quantidade){
            this.quantidade-=qtd
        } else{
            console.log("valor inválido")
        }
    }
    get Quantidade():number{
        return this.quantidade
    }
    get Preco():number{
        return this.preco
    }
    get total():number{
        return this.Quantidade*this.Preco
    }
}
const produto = new Produto("Produto A", 50, 10);
console.log(`Estoque inicial: ${produto.Quantidade}`); // 10

produto.adicionarEstoque(5);
console.log(`Estoque após adição: ${produto.Quantidade}`); // 15

produto.vender(3);
console.log(`Estoque após venda: ${produto.Quantidade}`); // 12

console.log(`Total em estoque: R$${produto.total}`); // Total em estoque: 600