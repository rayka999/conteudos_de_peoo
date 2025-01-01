import { Nota } from "./Nota.js";
export class Professor {
    constructor(nome, email, nome_usuario, senha) {
        this._nome = nome;
        this._email = email;
        this._nome_usuario = nome_usuario;
        this._senha = senha;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get email() {
        return this._email;
    }
    get senha() {
        return this._senha;
    }
    // Registrar nota do aluno
    registrarNota(aluno, disciplina, tipoAvaliacao, notaAluno) {
        if (notaAluno < 0 || notaAluno > 100) {
            alert("Nota inválida! A nota deve ser entre 0 e 100.");
            return;
        }
        let nota = new Nota(notaAluno, disciplina, aluno, tipoAvaliacao);
        aluno.adicionarNota(nota);
        alert(`Nota de ${nota.valorNota} registrada para ${aluno.nome} na disciplina ${disciplina.nome}`);
    }
    // Registrar frequência do aluno
    registrarFrequencia(aluno, percentualFrequencia) {
        if (percentualFrequencia < 0 || percentualFrequencia > 100) {
            alert("Frequência inválida! A frequência deve ser entre 0 e 100.");
            return;
        }
        aluno.adicionarFrequencia(percentualFrequencia);
        alert(`Frequência de ${percentualFrequencia}% registrada para ${aluno.nome}`);
    }
    // Gerar relatório de aluno
    gerarRelatorio(aluno) {
        aluno.emitirBoletim();
    }
}
