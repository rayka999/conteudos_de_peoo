"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gerente_1 = require("./Gerente");
var Funcionario_1 = require("./Funcionario");
var Empresa_1 = require("./Empresa");
var empresa = new Empresa_1.Empresa("Tech Soluções");
var f1 = new Funcionario_1.Funcionario("Alice", "contadora", 1000);
var f2 = new Funcionario_1.Funcionario("Jorge", "Administrador", 1000);
var f3 = new Funcionario_1.Funcionario("Fernanda", "advogada", 3500);
var g1 = new Gerente_1.Gerente("João", "Gerente", 5000, 200);
var g2 = new Gerente_1.Gerente("Valentina", "Gerente", 4000, 300);
empresa.adicionarFuncionario(f1);
empresa.adicionarFuncionario(f2);
empresa.adicionarFuncionario(f3);
empresa.adicionarFuncionario(g1);
empresa.adicionarFuncionario(g2);
empresa.listarFunconarios();
f1.aplicarAumento(10);
f2.aplicarAumento(15);
g2.aplicarAumento(10);
g1.Bonus = 500;
empresa.listarFunconarios();
