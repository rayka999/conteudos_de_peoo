const pessoa = {
	nome: "João",
	idade: 30,
	profissao: {empresa: "Google", cargo: "Desenvolvedor"}, //objeto dentro de outro objeto
	saudacao: function() {
		return `Olá, meu nome é ${this.nome}, tenho
        ${this.idade} anos e sou ${this.profissao.cargo}`; //acessando obj. dentro do outro obj
	}
};
console.log(pessoa.saudacao());


console.log("gerando string JSON")
const strJson=JSON.stringify(pessoa,null,2);
console.log(pessoa)
console.log(strJson)

/*objetos JSON não podem ter função.
JSON consegue ser interpretado por muitas linguagens
de programação (C++, python,etc)*/

JsonString = '{"nome" : "Maria", "Idade":"25","profissao": "analista"}';
const pessoa2= JSON.parse(JsonString);
console.log(pessoa2)