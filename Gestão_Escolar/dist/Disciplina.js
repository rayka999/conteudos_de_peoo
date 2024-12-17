export class Disciplina {
    constructor(nome, carga, professor) {
        this._nome = nome;
        this._cargaHoraria = carga;
        this._professorResponsavel = professor;
    }
    get nome() {
        return this._nome;
    }
}
