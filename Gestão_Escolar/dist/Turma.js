import { Nota } from "./Nota.js";
export class Turma {
    constructor(nome, anoLetivo, turno) {
        this._disciplinas = [];
        this._alunos = [];
        this._ano_letivo = anoLetivo;
        this._nome = nome;
        this._turno = turno;
    }
    adicionarDisciplina(disciplina) {
        this._disciplinas.push(disciplina);
    }
    adicionarAluno(aluno) {
        if (!this._alunos.includes(aluno)) {
            this._alunos.push(aluno);
        }
        else {
            console.log(`O aluno ${aluno.nome} já está matriculado nesta turma.`);
        }
    }
    // Matricular aluno na disciplina
    matricularAlunoNaDisciplina(aluno, disciplina) {
        if (this._alunos.includes(aluno)) {
            aluno.adicionarNota(new Nota(0, disciplina, aluno, "Avaliação Inicial")); // Exemplo de nota inicial
            console.log(`${aluno.nome} matriculado na disciplina ${disciplina.nome}`);
        }
        else {
            console.log(`Aluno ${aluno.nome} não está na turma.`);
        }
    }
}
