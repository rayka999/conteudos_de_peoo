export class Disciplina {
    constructor(nome, carga, professor) {
        this._nome = nome;
        this._quantidade_aulas = carga;
        this._professorResponsavel = professor;
    }
    get nome() {
        return this._nome;
    }
}
