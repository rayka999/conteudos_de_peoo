let usuario = { nome: 'Ana', idade: 30, ativo: true }
function idade_Mais1() {
    return usuario.idade+=1;
}

idade_Mais1();
console.log(usuario.idade)