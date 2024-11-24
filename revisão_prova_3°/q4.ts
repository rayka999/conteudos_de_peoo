class Forma{
    CalcularArea(){

    }
}

class Quadrado extends Forma{
    public lado:number
    constructor(lado:number){
        super()
        this.lado=lado
    }
    CalcularArea(): void {
        console.log(this.lado*this.lado)
    }
}

class Circulo extends Forma{
    public raio:number;
    constructor (raio:number){
        super()
        this.raio=raio
    }
    CalcularArea(): void {
        console.log(3.14*this.raio**2)
    }
}

let quadrado=new Quadrado(4)
quadrado.CalcularArea()
let circulo=new Circulo(2)
circulo.CalcularArea()