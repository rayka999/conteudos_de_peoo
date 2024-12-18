// Arquivo: main.ts
import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";
import { Disciplina } from "./Disciplina.js";
import { Turma } from "./Turma.js";
//professores
let professor1 = new Professor("Carlos Silva", "carlos.silva@escola.com", 2020, "senha123");
let professor2 = new Professor("Ana Pereira", "ana.pereira@escola.com", 2021, "senha456");
//disciplinas
let matematica = new Disciplina("Matemática", 80, professor1);
let portugues = new Disciplina("Português", 60, professor2);
//alunos
let aluno1 = new Aluno("João da Silva", "2005-04-15", "Rua A, 123", "joao@escola.com", 2020, new Turma("1º Ano", 2024, "Manhã"), "senhaAluno1", "senhaAluno1");
let aluno2 = new Aluno("Maria Oliveira", "2006-05-20", "Rua B, 456", "maria@escola.com", 2021, new Turma("1º Ano", 2024, "Manhã"), "senhaAluno2", "senhaAluno2");
//turma
let turma1 = new Turma("1º Ano", 2024, "Manhã");
// Adicionando disciplinas à turma
turma1.adicionarDisciplina(matematica);
turma1.adicionarDisciplina(portugues);
// Matriculando alunos na turma
turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);
// Matriculando alunos nas disciplinas
turma1.matricularAlunoNaDisciplina(aluno1, matematica);
turma1.matricularAlunoNaDisciplina(aluno1, portugues);
turma1.matricularAlunoNaDisciplina(aluno2, matematica);
turma1.matricularAlunoNaDisciplina(aluno2, portugues);
// Registrando notas e frequências
professor1.registrarNota(aluno1, matematica, "Prova 1", 85);
professor1.registrarNota(aluno2, matematica, "Prova 1", 90);
professor2.registrarNota(aluno1, portugues, "Prova 1", 75);
professor2.registrarNota(aluno2, portugues, "Prova 1", 80);
professor1.registrarFrequencia(aluno1, 95);
professor1.registrarFrequencia(aluno2, 90);
professor2.registrarFrequencia(aluno1, 85);
professor2.registrarFrequencia(aluno2, 88);
// Emitindo boletins.
aluno1.emitirBoletim();
aluno2.emitirBoletim();
// Gerando relatórios dos alunos
professor1.gerarRelatorio(aluno1);
professor2.gerarRelatorio(aluno2);
