import { Gerente } from "./Gerente";
import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";

let empresa= new Empresa("Tech Soluções")

let f1=new Funcionario("Alice", "contadora",1000)
let f2= new Funcionario("Jorge", "Administrador",1000)
let f3= new Funcionario("Fernanda","advogada",3500)

let g1=new Gerente("João","Gerente",5000,200)
let g2=new Gerente("Valentina","Gerente",4000,300)

empresa.adicionarFuncionario(f1)
empresa.adicionarFuncionario(f2)
empresa.adicionarFuncionario(f3)
empresa.adicionarFuncionario(g1)
empresa.adicionarFuncionario(g2)

empresa.listarFunconarios()

f1.aplicarAumento(10)
f2.aplicarAumento(15)

g2.aplicarAumento(10)
g1.Bonus=400

empresa.listarFunconarios()
