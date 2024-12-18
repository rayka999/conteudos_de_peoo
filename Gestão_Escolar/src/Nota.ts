import { Disciplina } from "./Disciplina.js";
import { Aluno } from "./Aluno.js";

export class Nota {
    //propriedades
    private _valorNota: number;
    private _disciplina: Disciplina;
    private _aluno: Aluno;
    private _tipoAvaliacao: string;

    constructor(valorNota: number, disciplina: Disciplina, aluno: Aluno, tipoAvaliacao: string) {
        this._valorNota = valorNota;
        this._disciplina = disciplina;
        this._aluno = aluno;
        this._tipoAvaliacao = tipoAvaliacao;
    }

    atribuirNota(valor: number): void {
        if (valor < 0 || valor > 100) {
            console.log("Nota inválida. A nota deve estar entre 0 e 100.");
        } else {
            this._valorNota = valor;
        }
    }

    // Método para calcular a média, caso necessário para a disciplina
    calcularMedia(): number {
        return this._valorNota;
    }

    get valorNota(): number {
        return this._valorNota;
    }
}
