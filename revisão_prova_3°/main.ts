import { Desenvolvedor } from './Desenvolvedor';

const devJunior = new Desenvolvedor('Alice Costa', 3000, 'Junior');
console.log(`- ${devJunior.Nome} # Salário atual: R$ ${devJunior.Salario.toFixed(2)}`);
devJunior.promover();

const devPleno = new Desenvolvedor('Bruno Souza', 5000, 'Pleno');
console.log(`- ${devPleno.Nome} # Salário atual: R$ ${devPleno.Salario.toFixed(2)}`);
devPleno.promover();

const devSenior = new Desenvolvedor('Joana Teles', 8000, 'Senior');
console.log(`- ${devSenior.Nome} # Salário atual: R$${devSenior.Salario.toFixed(2)}`);
devSenior.promover();