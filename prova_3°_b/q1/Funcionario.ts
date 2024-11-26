export class Funcionario{
    protected _nome:string;
    protected _cargo:string
    protected _salario:number

    constructor(nome:string,cargo:string,salario:number){
        this._nome=nome
        this._cargo=cargo
        this._salario=salario
    }
    get nome():string{
        return this._nome
    }

    get cargo():string{
        return this._cargo
    }

    get salario():number{
        return this._salario
    }

    set Nome(name:string){
        if(name.length>0){
            this._nome=name
        } else{
            console.log("Digite algum nome")
        }
    }

    set Salario(car:string){
        if(car.length>0){
            this._cargo=car
        } else{
            console.log("Digite algum cargo")
        }
    }
    aplicarAumento(percentual:number){
        if(percentual>0){
            this._salario=this._salario*(1+(percentual/100))
        } else{
            console.log("Percentual inválido")
        }
    }
    descricao():string{
        return `Nome:${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}`
    }
}