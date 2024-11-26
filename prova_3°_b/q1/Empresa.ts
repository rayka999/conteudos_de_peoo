import { Funcionario } from "./Funcionario";

export class Empresa{
    private _nome:string;
    private _funcionarios: Funcionario[]=[]

    constructor(nome:string){
        this._nome=nome
    }

    get nome():string{
        return this._nome
    }

    adicionarFuncionario(funcionario:Funcionario):void{
        this._funcionarios.push(funcionario)
    }

    listarFunconarios():void{
        console.log(`Funcionários da empresa ${this.nome}`)
        this._funcionarios.forEach(trabalhador => {
            console.log(trabalhador.descricao())
            console.log("----------------------")
        });
    }
}