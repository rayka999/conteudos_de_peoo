class Produto{
    nome: string;
    preco: number;

    constructor (nome: string, preco:number){
        this.nome=nome;
        this.preco=preco;
    }
}

class CarrinhoDeCompras {
    produtos:Produto []=[];

    adicionarProduto(produto: Produto) {
        this.produtos.push(produto)
    }

    calcularTotal(): number {
        let total=0;
        for (let produto of this.produtos) {
            total+= produto.preco
        }
        return total
    }
}

let produto1 = new Produto("Camiseta", 50.00);
let produto2 = new Produto("Calça Jeans", 120.00);
let produto3 = new Produto("Tênis", 200.00);

let carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

console.log(`Total do Carrinho: R$ ${carrinho.calcularTotal().toFixed(2)}`);