import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";

export class Turma {
    private _nome: string;
    private _ano_letivo: number;
    private _turno: string;
    protected _disciplinas: Disciplina[] = [];
    protected _alunos: Aluno[] = [];

    constructor(nome: string, anoLetivo: number, turno: string) {
        this._ano_letivo = anoLetivo;
        this._nome = nome;
        this._turno = turno;
    }

    adicionarDisciplina(disciplina: Disciplina): void {
        this._disciplinas.push(disciplina);
    }

    adicionarAluno(aluno: Aluno): void {
        if (!this._alunos.includes(aluno)) {
            this._alunos.push(aluno);
        } else {
            console.log(`O aluno ${aluno.nome} já está matriculado nesta turma.`);
        }
    }

    // Matricular aluno na disciplina
    matricularAlunoNaDisciplina(aluno: Aluno, disciplina: Disciplina): void {
        if (this._alunos.includes(aluno)) {
            aluno.adicionarNota(new Nota(0, disciplina, aluno, "Avaliação Inicial"));  // Exemplo de nota inicial
            console.log(`${aluno.nome} matriculado na disciplina ${disciplina.nome}`);
        } else {
            console.log(`Aluno ${aluno.nome} não está na turma.`);
        }
    }
}
