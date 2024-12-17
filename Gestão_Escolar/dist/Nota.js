export class Nota {
    constructor(valorNota, disciplina, aluno, tipoAvaliacao) {
        this._valorNota = valorNota;
        this._disciplina = disciplina;
        this._aluno = aluno;
        this._tipoAvaliacao = tipoAvaliacao;
    }
    atribuirNota(valor) {
        if (valor < 0 || valor > 100) {
            console.log("Nota inválida. A nota deve estar entre 0 e 100.");
        }
        else {
            this._valorNota = valor;
        }
    }
    // Método para calcular a média, caso necessário para a disciplina
    calcularMedia() {
        return this._valorNota;
    }
    get valorNota() {
        return this._valorNota;
    }
}
