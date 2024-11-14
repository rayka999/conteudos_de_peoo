class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome:string, salario:number){
        this.nome=nome;
        this.salario=salario
    }
}

class Gerente extends Funcionario{
    public bonus: number;

    constructor(nome: string, salario: number,bonus: number){
        super(nome,salario)
        this.bonus=bonus;
    }

    calcularSalarioTotal():number{
        return this.salario+this.bonus
    }
}

let funcionario_01=new Funcionario("Jorge", 1500)
let gerente_01=new Gerente("Francisco",1500,200)
console.log(gerente_01.calcularSalarioTotal())