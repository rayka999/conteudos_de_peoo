const pessoa = { nome: "Alice", idade: 25 };
pessoa['cidade']='Natal';
console.log(pessoa.cidade)
delete pessoa.idade;
console.log(pessoa)