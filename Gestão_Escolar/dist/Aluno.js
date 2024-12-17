export class Aluno {
    constructor(nome, dataNascimento, endereco, email, anoDeMatricula, turma, senha_1, senha_2) {
        this._notas = [];
        this._frequencia = []; // Para registrar a frequência, poderia ser um array de porcentagem ou booleano
        this._nome = nome;
        this._data_nascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._ano_de_matricula = anoDeMatricula;
        this._turma = turma;
        if (senha_1 == senha_2) {
            this._senha = senha_1;
        }
        else {
            console.log("Erro: Senhas diferentes");
        }
    }
    // Método para adicionar notas ao aluno
    adicionarNota(nota) {
        this._notas.push(nota);
    }
    // Método para adicionar frequência
    adicionarFrequencia(frequencia) {
        this._frequencia.push(frequencia);
    }
    // Método para emitir o boletim do aluno
    emitirBoletim() {
        let somaNotas = 0;
        let qtdNotas = this._notas.length;
        this._notas.forEach(nota => {
            somaNotas += nota.valorNota;
        });
        let media = somaNotas / qtdNotas;
        console.log(`Boletim do Aluno: ${this._nome}`);
        console.log(`Média: ${media}`);
        console.log(`Frequência: ${this.calcularFrequencia()}`);
    }
    // Método para calcular a frequência média do aluno
    calcularFrequencia() {
        if (this._frequencia.length === 0)
            return 0;
        let somaFrequencia = this._frequencia.reduce((acc, freq) => acc + freq, 0);
        return somaFrequencia / this._frequencia.length;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
