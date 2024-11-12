/*### O que são Getters?

- **Getters** são métodos usados para obter
(ou "pegar") o valor de um atributo privado.
- Eles são utilizados para expor o valor de um
 atributo sem permitir sua modificação direta.

### O que são Setters?

- **Setters** são métodos usados para definir
(ou "setar") o valor de um atributo privado.
- Eles podem incluir regras ou validações para
assegurar que o atributo seja modificado corretamente. */
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        // Getter para o atributo _nome
        get: function () {
            return this._nome;
        },
        // Setter para o atributo _nome
        set: function (novoNome) {
            if (novoNome.length > 0) {
                this._nome = novoNome;
            }
            else {
                console.log("O nome não pode ser vazio.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        // Getter para o atributo _idade
        get: function () {
            return this._idade;
        },
        // Setter para o atributo _idade
        set: function (novaIdade) {
            if (novaIdade > 0) {
                this._idade = novaIdade;
            }
            else {
                console.log("A idade deve ser um número positivo.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
// Exemplo de uso da classe Pessoa
var pessoa = new Pessoa("Alice", 25);
console.log(pessoa.nome); // Alice
pessoa.nome = "Maria"; // Atribuindo um novo nome
console.log(pessoa.nome); // Maria
pessoa.idade = -5; // Tentativa de atribuir uma idade inválida
// Resultado: "A idade deve ser um número positivo."
//Herança: ocorre quando uma classe herda atributos e métodos de outra classe
//Em TypeScript, a herança é implementada usando a palavra-chave extends.
