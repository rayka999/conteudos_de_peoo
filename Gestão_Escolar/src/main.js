"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arquivo: main.ts
const Aluno_js_1 = require("./Aluno.js");
const Professor_js_1 = require("./Professor.js");
const Disciplina_js_1 = require("./Disciplina.js");
const Turma_js_1 = require("./Turma.js");
//professores
let professor1 = new Professor_js_1.Professor("Carlos Silva", "carlos.silva@escola.com", "Carlos65", "senha123");
let professor2 = new Professor_js_1.Professor("Ana Pereira", "ana.pereira@escola.com", "@naPereira12", "senha456");
//disciplinas
let matematica = new Disciplina_js_1.Disciplina("Matemática", 80, professor1);
let portugues = new Disciplina_js_1.Disciplina("Português", 60, professor2);
//turma
let turma1 = new Turma_js_1.Turma("1º Ano", 2024, "Manhã");
//alunos
let aluno1 = new Aluno_js_1.Aluno("João da Silva", "2005-04-15", "Rua A, 123", "joao@escola.com", turma1, "#JoaoMilgrau", "1234");
let aluno2 = new Aluno_js_1.Aluno("Maria Oliveira", "2006-05-20", "Rua B, 456", "maria@escola.com", turma1, "Maria123", "4567");
//turma
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
