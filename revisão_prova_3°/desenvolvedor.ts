import {Funcionario} from "./funcionario"
export class Desenvolvedor extends Funcionario{
    protected _nivel:string

    constructor(nome:string,salario:number,nivel:string){
        super(nome,salario)
        this._nivel=nivel
    }
    promover():void{
        switch(this._nivel){
            case "Junior":
                this._salario=this._salario*(1.1)
            break
            case "Pleno":
                this._salario=this._salario*(1.2)
            break
            case "Senior":
                this._salario=this._salario*(1.3)
            break
            default:
                console.log('Nível inválido para promoção')
        }
        console.log(`O novo salário de ${this.Nome} é ${this.Salario.toFixed(2)}`)
    }
    get Nivel():string{
        return this._nivel
    }
    set Nivel(novoNivel:string){
        if (novoNivel === "Junior" || novoNivel === "Pleno" ||novoNivel === "Senior" ){
            this._nivel=novoNivel
        } else{
            console.log("Nível inválido")
        }
    }
}