class carro{
    public marca:string;
    public modelo:string;
    public ano:number;

    constructor(marca:string, modelo:string,ano:number=2022){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
}

let carro_com=new carro("Chevrolet","Onix",2024)
let carro_sem= new carro("Toyota","Corolla")

console.log(carro_com.ano)
console.log(carro_sem.ano)