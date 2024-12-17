import { Professor } from "./Professor";
export class Disciplina{
    private _nome:string;
    private _cargaHoraria:number;
    private _professorResponsavel:Professor;

    constructor(nome:string, carga:number, professor:Professor){
        this._nome= nome;
        this._cargaHoraria= carga;
        this._professorResponsavel= professor;

    }
    
}