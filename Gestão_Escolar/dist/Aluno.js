export class Aluno {
    constructor(nome, dataNascimento, endereco, email, turma, usuario, senha) {
        this._notas = [];
        this._frequencia = []; // Para registrar a frequência, poderia ser um array de porcentagem ou booleano.
        this._nome = nome;
        this._data_nascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._turma = turma;
        this._Usuario = usuario;
        this._senha = senha;
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
        this._notas.forEach(nota => {
            somaNotas += nota.valorNota;
        });
        let media = somaNotas / 4;
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
