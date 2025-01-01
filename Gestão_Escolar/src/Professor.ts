import { Aluno } from "./Aluno.js";
import { Disciplina } from "./Disciplina.js";
import { Nota } from "./Nota.js";

export class Professor {
    private _nome: string;
    private _email: string;
    private _nome_usuario:string;
    private _senha: string;

    constructor(nome: string, email: string,nome_usuario:string , senha: string) {
        this._nome = nome;
        this._email = email;
        this._nome_usuario=nome_usuario;
        this._senha = senha;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(valor: string) {
        this._nome = valor;
    }
    get email(): string {
        return this._email;
    }

    get senha(): string {
        return this._senha;
    }

    // Registrar nota do aluno
    registrarNota(aluno: Aluno, disciplina: Disciplina, tipoAvaliacao: string, notaAluno: number): void {
        if (notaAluno < 0 || notaAluno > 100) {
            alert("Nota inválida! A nota deve ser entre 0 e 100.");
            return;
        }
        let nota = new Nota(notaAluno, disciplina, aluno, tipoAvaliacao);
        aluno.adicionarNota(nota);
        alert(`Nota de ${nota.valorNota} registrada para ${aluno.nome} na disciplina ${disciplina.nome}`);
    }

    // Registrar frequência do aluno
    registrarFrequencia(aluno: Aluno, percentualFrequencia: number): void {
        if (percentualFrequencia < 0 || percentualFrequencia > 100) {
            alert("Frequência inválida! A frequência deve ser entre 0 e 100.");
            return;
        }
        aluno.adicionarFrequencia(percentualFrequencia);
        alert(`Frequência de ${percentualFrequencia}% registrada para ${aluno.nome}`);
    }

    // Gerar relatório de aluno
    gerarRelatorio(aluno: Aluno): void {
        aluno.emitirBoletim();
    }
}