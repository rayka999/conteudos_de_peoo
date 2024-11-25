export class Funcionario{
    protected _nome:string
    protected _salario:number

    constructor(nome:string,salario:number){
        this._nome=nome
        this._salario=salario
    }
    get Salario():number{
        return this._salario
    }
    get Nome():string{
        return this._nome
    }
}