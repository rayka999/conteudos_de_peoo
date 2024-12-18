import { Nota } from "./Nota.js";
export class Professor {
    constructor(nome, email, ano, senha) {
        this._nome = nome;
        this._email = email;
        this._ano_de_contratacao = ano;
        this._senha = senha;
    }
    // Registrar nota do aluno.
    registrarNota(aluno, disciplina, tipoAvaliacao, valor) {
        let nota = new Nota(valor, disciplina, aluno, tipoAvaliacao);
        aluno.adicionarNota(nota);
        console.log(`Nota de ${nota.valorNota} registrada para ${aluno.nome} na disciplina ${disciplina.nome}`);
    }
    // Registrar frequência do aluno
    registrarFrequencia(aluno, frequencia) {
        aluno.adicionarFrequencia(frequencia);
        console.log(`Frequência de ${frequencia}% registrada para ${aluno.nome}`);
    }
    // Gerar relatório de aluno
    gerarRelatorio(aluno) {
        aluno.emitirBoletim();
    }
}
