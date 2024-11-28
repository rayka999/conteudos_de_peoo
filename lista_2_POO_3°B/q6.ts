abstract class Produto {
    constructor (protected preco:number){
        this.preco=preco
    }
    abstract calcularPrecoFinal(n:number):number;
}

class ProdutoDigital extends Produto{
    calcularPrecoFinal(frete:number): number {
        return this.preco+=frete;
    }
}

class ProdutoFisico extends Produto{
    calcularPrecoFinal(Imposto: number): number {
        return this.preco+=Imposto
    }
}

