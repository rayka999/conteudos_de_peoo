import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    private _bonus:number;

    constructor(nome:string,cargo:string,salario:number,bonus:number){
        super(nome,cargo,salario)
        this._bonus=bonus
    }

    get bonus():number{
        return this._bonus
    }

    set Bonus(num:number){
        if ( num>0){
            this._bonus=num
        } else{
            console.log("Bonus não pode ser negativo")
        }
    }

    descricao(): string {
        let salario_total:number=this.salario+this.bonus
        return `Nome:${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${salario_total}`
    }
}