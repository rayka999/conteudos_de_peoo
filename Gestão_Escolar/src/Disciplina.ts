import { Professor } from "./Professor";
export class Disciplina{
    //propriedades
    private _nome:string;
    private _cargaHoraria:number;
    private _professorResponsavel:Professor;

    constructor(nome:string, carga:number, professor:Professor){
        this._nome= nome;
        this._cargaHoraria= carga;
        this._professorResponsavel= professor;

    }
    
    get nome():string{
        return this._nome
    }
}