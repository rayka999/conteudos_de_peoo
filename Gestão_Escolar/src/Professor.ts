import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Nota } from "./Nota";

export class Professor {
    private _nome: string;
    private _email: string;
    private _ano_de_contratacao: number;
    private _senha: string;

    constructor(nome: string, email: string, ano: number, senha: string) {
        this._nome = nome;
        this._email = email;
        this._ano_de_contratacao = ano;
        this._senha = senha;
    }

    // Registrar nota do aluno
    registrarNota(aluno: Aluno, disciplina: Disciplina, tipoAvaliacao: string, valor: number): void {
        let nota = new Nota(valor, disciplina, aluno, tipoAvaliacao);
        aluno.adicionarNota(nota);
        console.log(`Nota de ${nota.valorNota} registrada para ${aluno.nome} na disciplina ${disciplina.nome}`);
    }

    // Registrar frequência do aluno
    registrarFrequencia(aluno: Aluno, frequencia: number): void {
        aluno.adicionarFrequencia(frequencia);
        console.log(`Frequência de ${frequencia}% registrada para ${aluno.nome}`);
    }

    // Gerar relatório de aluno
    gerarRelatorio(aluno: Aluno): void {
        aluno.emitirBoletim();
    }
}
