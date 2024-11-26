export class Filme{
    private _titulo:string
    private _diretor:string
    private _anoLancamento:number
    private _avaliacoes:number[]=[]

    constructor(titulo:string,diretor:string,anoLancamento:number){
        this._titulo=titulo
        this._diretor=diretor
        this._anoLancamento=anoLancamento
    }

    get titulo():string{
        return this._titulo
    }

    get diretor():string{
        return this._diretor
    }

    get anoLancamento():number{
        return this._anoLancamento
    }

    set Titulo(t:string){
        if(t.length>0){
            this._titulo=t
        } else{
            console.log("Digite algum titulo")
        }
    }

    set Diretor(d:string){
        if(d.length>0){
            this._diretor=d
        } else{
            console.log("Digite algum diretor")
        }
    }

    set anoLancamento(a:number){
        if(a>0){
            this._anoLancamento=a
        } else{
            console.log("Digite um ano válido")
        }
    }

    adicionarAvaliacao(nota:number):void{
        if (nota>1 && nota>5 || nota==1 || nota==5){
            this._avaliacoes.push(nota)
        } else{
            console.log("nota tem que ser entre 1 e 5")
        }
    }

    calcularMediaAvaliacoes():number{
        let media=0
        this._avaliacoes.forEach(ava => {
            media+=ava
        });
        media= media/ (this._avaliacoes.length)
        return media
    }
}