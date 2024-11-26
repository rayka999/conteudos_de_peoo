class Veiculo{
    private _marca:string
    private _modelo:string
    private _ano:number

    constructor(marca:string,modelo:string,ano:number){
        this._marca=marca
        this._modelo=modelo
        this._ano=ano
    }

    get marca(): string{
        return this._marca
    }
    set Marca(m:string){
        if (m.length){
            this._marca=m
        }
    }

    get Modelo():string{
        return this._modelo
    }

    set Modelo(mod:string){
        if(mod.length){
            this._modelo=mod
        }
    }
    get Ano():number{
        return this._ano
    }

    set Ano(year:number){
        if(year>0){
            this._ano=year
        }
    }

}

class Carro extends Veiculo{
    private num_portas:number

    constructor(marca:string,modelo:string,ano:number,num_portas:number){
        super(marca,modelo,ano)
        this.num_portas=num_portas
    }

    get Numero_portas():number{
        return this.num_portas
    }
}