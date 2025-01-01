import { Turma } from "./Turma";
import { Nota } from "./Nota";

export class Aluno {
    //propriedades
    private _nome: string;
    private _data_nascimento: string;
    private _endereco: string;
    private _email: string;
    protected _turma: Turma;
    private _Usuario:string;
    private _senha: string;
    protected _notas: Nota[] = [];
    private _frequencia: number[] = [];  // Para registrar a frequência, poderia ser um array de porcentagem ou booleano.

    constructor(nome: string, dataNascimento: string, endereco: string, email: string, turma: Turma,usuario:string,senha:string ) {
        this._nome = nome;
        this._data_nascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._turma = turma;
        this._Usuario=usuario
        this._senha=senha
    }

    // Método para adicionar notas ao aluno
    adicionarNota(nota: Nota): void {
        this._notas.push(nota);
    }

    // Método para adicionar frequência
    adicionarFrequencia(frequencia: number): void {
        this._frequencia.push(frequencia);
    }

    // Método para emitir o boletim do aluno
    emitirBoletim(): void {
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
    calcularFrequencia(): number {
        if (this._frequencia.length === 0) return 0;
        let somaFrequencia = this._frequencia.reduce((acc, freq) => acc + freq, 0);
        return somaFrequencia / this._frequencia.length;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }
}