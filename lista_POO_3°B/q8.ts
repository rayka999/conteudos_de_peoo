class Funcionario{
    public nome: string;
    protected salario: number;

    constructor(nome:string, salario:number){
        this.nome=nome;
        this.salario=salario;
    }
    getSalario():string{
        return `${this.salario.toFixed(2)}`
    }
}

class Desenvolvedor extends Funcionario{
    public nivel: string;

    constructor(nome:string,salario:number,nivel:string){
        super(nome,salario);
        this.nivel=nivel
    }

    promover():void{
        switch(this.nivel){
            case "Junior":
                this.salario *= 1.10;
                break;
            case "Pleno":
                this.salario *= 1.15;
                break;
            case "Senior":
                this.salario *=1.20;
                break;
            default:
                console.log ("nível desconhecido")
        }
    }
}

const devJunior = new Desenvolvedor('Alice', 3000, 'Junior');
console.log(`${devJunior.nome} (Junior): R$ ${devJunior.getSalario()}`);
devJunior.promover();
console.log(`Após promoção: R$ ${devJunior.getSalario()}`);

const devPleno = new Desenvolvedor('Bob', 5000, 'Pleno');
console.log(`${devPleno.nome} (Pleno): R$ ${devPleno.getSalario()}`);
devPleno.promover();
console.log(`Após promoção: R$ ${devPleno.getSalario()}`);

const devSenior = new Desenvolvedor('Carlos', 8000, 'Senior');
console.log(`${devSenior.nome} (Senior): R$ ${devSenior.getSalario()}`);
devSenior.promover();
console.log(`Após promoção: R$ ${devSenior.getSalario()}`);