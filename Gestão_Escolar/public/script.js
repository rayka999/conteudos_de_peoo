// classes importadas
import { Aluno } from "../dist/Aluno.js";
import { Professor } from "../dist/Professor.js";
import { Disciplina } from "../dist/Disciplina.js";
import { Turma } from "../dist/Turma.js";
import { Nota } from "../dist/Nota.js";

// Turmas
let turma_1A = new Turma("1° ano A", 2024, "Matutino");
let turma_1B = new Turma("1° ano B", 2024, "Vespertino");
let turma_2A = new Turma("2° ano A", 2024, "Matutino");
let turma_2B = new Turma("2° ano B", 2024, "Vespertino");
let turma_3A = new Turma("3° ano A", 2024, "Matutino");
let turma_3B = new Turma("3° ano B", 2024, "Vespertino");

//professores

const professor1 = new Professor(
    "Carlos Silva", 
    "carlos.silva@email.com", 
    "carlos123", 
    "senha123"
);

const professor2 = new Professor(
    "Maria Oliveira", 
    "maria.oliveira@email.com", 
    "maria2025", 
    "senha456"
);

const professor3 = new Professor(
    "João Pereira", 
    "joao.pereira@email.com", 
    "joao987", 
    "senha234"
);

const professor4 = new Professor(
    "Ana Costa", 
    "ana.costa@email.com", 
    "ana102", 
    "senha143"
);

const professor5 = new Professor(
    "Lucas Souza", 
    "lucas.souza@email.com", 
    "lucas123", 
    "senha124"
);

const professor6 = new Professor(
    "Fernanda Lima", 
    "fernanda.lima@email.com", 
    "fernanda123", 
    "senha745"
);

//disciplinas

const matematica_manha=new Disciplina("matemática",80,professor1);
const matematica_tarde=new Disciplina("matemática",80,professor2);
const fisica_manha=new Disciplina("Física",80,professor3)
const fisica_tarde=new Disciplina("Física",80,professor4)
const geografia_manhã=new Disciplina("Geografia",60,professor5)
const geografia_tarde=new Disciplina("Geografia",60,professor6)

//adicionando disciplinas as turmas

// Adicionando as disciplinas para as turmas da manhã
turma_1A.adicionarDisciplina(matematica_manha);
turma_1A.adicionarDisciplina(fisica_manha);
turma_1A.adicionarDisciplina(geografia_manhã);

turma_2A.adicionarDisciplina(matematica_manha);
turma_2A.adicionarDisciplina(fisica_manha);
turma_2A.adicionarDisciplina(geografia_manhã);

turma_3A.adicionarDisciplina(matematica_manha);
turma_3A.adicionarDisciplina(fisica_manha);
turma_3A.adicionarDisciplina(geografia_manhã);

// Adicionando as disciplinas para as turmas da tarde
turma_1B.adicionarDisciplina(matematica_tarde);
turma_1B.adicionarDisciplina(fisica_tarde);
turma_1B.adicionarDisciplina(geografia_tarde);

turma_2B.adicionarDisciplina(matematica_tarde);
turma_2B.adicionarDisciplina(fisica_tarde);
turma_2B.adicionarDisciplina(geografia_tarde);

turma_3B.adicionarDisciplina(matematica_tarde);
turma_3B.adicionarDisciplina(fisica_tarde);
turma_3B.adicionarDisciplina(geografia_tarde);


let turmas = [turma_1A, turma_1B, turma_2A, turma_2B, turma_3A, turma_3B];

// Função para listar as turmas no select
function listar_turmas() {
    let select = document.getElementById("turma");
    for (let i = 0; i < turmas.length; i++) {
        // Cria a opção de cada turma com o índice e nome
        let novaOpcao = new Option(turmas[i]._nome, i);
        select.options[select.options.length] = novaOpcao;
    }
}

// Chama a função para listar as turmas
listar_turmas();

// Função para criar aluno e cadastrá-lo
function criarAlunoECadastrar(nome, dataNascimento, endereco, email, turma, usuario, senha) {

    let aluno = new Aluno(nome, dataNascimento, endereco, email, turma, usuario, senha);
    
    // Armazenar os dados no localStorage 
    localStorage.setItem('nomeUsuario', nome);
    localStorage.setItem('usuario', usuario);

    turma.adicionarAluno(aluno);

    // Matricula o aluno nas disciplinas da turma
    turma._disciplinas.forEach(disciplina => {
        turma.matricularAlunoNaDisciplina(aluno, disciplina);
    });


    // Exibe uma mensagem de sucesso
    alert(`Cadastro realizado com sucesso! Estudante ${aluno.nome} foi adicionado(a) à turma ${turma._nome}.`);
}

// Evento de submit do formulário
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores do formulário
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const turmaIndex = document.getElementById("turma").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const confirmacaoSenha = document.getElementById("confirmacaoSenha").value;
    const erroSenha = document.getElementById("erroSenha");

    // Verifica se as senhas coincidem
    if (senha !== confirmacaoSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.")
    }

    // Verifica se a turma foi selecionada
    if (turmaIndex === "") {
        alert("Por favor, selecione uma turma.");
        return;
    }

    // Encontra a turma pelo índice selecionado
    const turma = turmas[turmaIndex];  // Busca a turma pelo índice selecionado

    // Chama a função para criar o aluno e cadastrá-lo na turma
    criarAlunoECadastrar(nome, dataNascimento, endereco, email, turma, usuario, senha);
    
    // Redirecionar para a página do aluno
    window.location.href = 'pagina-aluno.html';  // Altere para a URL da página do aluno
});
function exibirBoletim(){
    // Recuperar os dados do aluno do localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const usuario = localStorage.getItem('usuario');

    if (!nomeUsuario || !usuario) {
        alert("Você precisa estar logado para visualizar seu boletim.");
        return;
    }
    
        // Encontrar o aluno pela chave de usuário
    const aluno = turma_1A.alunos.find(a => a._Usuario === usuario) || 
                  turma_1B.alunos.find(a => a._Usuario === usuario) ||
                  turma_2A.alunos.find(a => a._Usuario === usuario) ||
                  turma_2B.alunos.find(a => a._Usuario === usuario) ||
                  turma_3A.alunos.find(a => a._Usuario === usuario) ||
                  turma_3B.alunos.find(a => a._Usuario === usuario);
    
    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }
    
    // Emitir boletim
    const boletimDiv = document.getElementById("boletim_grade");
    let boletimHtml = `<h2>Boletim de ${aluno.nome}</h2>`;
    
    // Calcular média
    let somaNotas = 0;
    aluno._notas.forEach(nota => {
        somaNotas += nota.valorNota;
    });
    let media = somaNotas / aluno._notas.length;

    boletimHtml += `<p>Média: ${media.toFixed(2)}</p>`;
    boletimHtml += `<p>Frequência: ${aluno.calcularFrequencia().toFixed(2)}%</p>`;
    
    boletimDiv.innerHTML = boletimHtml;
}
    

function exibirGradeCurricular() {
    // Recuperar os dados do aluno do localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const usuario = localStorage.getItem('usuario');

    if (!nomeUsuario || !usuario) {
        alert("Você precisa estar logado para visualizar sua grade curricular.");
        return;
    }

    // Encontrar o aluno pela chave de usuário
    const aluno = turma_1A.alunos.find(a => a._Usuario === usuario) || 
                  turma_1B.alunos.find(a => a._Usuario === usuario) ||
                  turma_2A.alunos.find(a => a._Usuario === usuario) ||
                  turma_2B.alunos.find(a => a._Usuario === usuario) ||
                  turma_3A.alunos.find(a => a._Usuario === usuario) ||
                  turma_3B.alunos.find(a => a._Usuario === usuario);

    if (!aluno) {
        alert("Aluno não encontrado.");
        return;
    }

    // Exibir grade curricular
    const gradeDiv = document.getElementById("boletim_grade");
    let gradeHtml = `<h2>Grade Curricular de ${aluno.nome}</h2>`;

    // Listar disciplinas
    aluno._turma._disciplinas.forEach(disciplina => {
        gradeHtml += `<p><strong>${disciplina.nome}</strong> - Professor(a): ${disciplina.professor.nome}</p>`;
    });

    gradeDiv.innerHTML = gradeHtml;
}