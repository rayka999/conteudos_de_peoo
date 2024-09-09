//Objetos JSON

/*Objetos são coleções de pares chave-valor. Eles são usados 
para armazenar dados estruturados e podem conter propriedades
 e métodos.
Ex:*/
const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
	saudacao: function() {
		return `Olá, meu nome é ${this.nome}`;
	}
};

/*JSON é um formato de texto leve para intercâmbio de dados. 
Ele é fácil de ler e escrever para humanos e fácil de analisar
 e gerar para máquinas. JSON é frequentemente usado para transmitir
  dados entre um servidor e uma aplicação web.*/
//EX:
const usuario=`{
	"nome": "João",
	"idade": 30,
	"profissao": "Desenvolvedor"
}`

const usuario_js=JSON.parse(usuario)
console.log(usuario_js.nome)

//Para converter um objeto JavaScript 
//em uma string JSON, usamos JSON.stringify(). 
/*Para converter uma string JSON em um objeto
 JavaScript, usamos JSON.parse().*/

/*Quando você precisa enviar dados para um servidor,
 você geralmente converte o objeto JavaScript em JSON.*/

/*JSON permite que você transforme dados complexos 
(como objetos e arrays) em strings, o que é útil para
 serialização. Isso é necessário para que os dados possam
  ser transmitidos ou armazenados de maneira uniforme.*/

