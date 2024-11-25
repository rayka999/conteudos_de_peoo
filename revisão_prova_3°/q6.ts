class Funcionario{
    public nome:string;
    protected salario: number;
    constructor(nome:string,salario:number){
        this.nome=nome
        this.salario=salario
    }
    detalhes():void{}
}

class Gerente extends Funcionario{
    public equipe: Funcionario[]=[]

    constructor(nome:string,salario:number){
        super(nome,salario)
        //this.equipe.push(funcionario)
    }
    adicionarfuncionario(funcionario:Funcionario):void{
        this.equipe.push(funcionario)
    }
    detalhes(): void {
        console.log(`a equipe do gerente ${this.nome} é formada por:`)
        this.equipe.forEach(trabalhador => {
            console.log(trabalhador.nome)
        });
    }
}

class Desenvolvedor extends Funcionario{
    public linguagemFavorita: string;

    constructor(nome:string,salario:number,linguagem:string){
        super(nome,salario)
        this.linguagemFavorita=linguagem
    }

    detalhes(): void {
        console.log(`a linguagem favorita de ${this.nome} é ${this.linguagemFavorita}`)
    }

}

const funcionario1 = new Funcionario("Ana", 3500);
const funcionario2 = new Funcionario("Carlos", 4200);

const desenvolvedor1 = new Desenvolvedor("Julia", 5000, "JavaScript");
const desenvolvedor2 = new Desenvolvedor("Pedro", 5500, "TypeScript");

const gerente = new Gerente("Ricardo", 7000);
gerente.adicionarfuncionario(funcionario1)
gerente.adicionarfuncionario(funcionario2)
desenvolvedor1.detalhes()
gerente.detalhes()
