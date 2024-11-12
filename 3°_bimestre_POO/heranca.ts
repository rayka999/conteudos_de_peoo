class Animal {
    protected nome: string; //protege a classe das outras, mas dá acesso as subclasse

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som do animal");
    }
    
    public mover(distancia: number): void {
		    console.log(`${this.nome} se moveu ${distancia} metros.`);
	  }
}

let animal_01=new Animal("gato");
animal_01.emitirSom();
animal_01.mover(10)

class Gato extends Animal { //define cachorro como subclasse de Animal
    private raca: string //atributo adicionado
    
    constructor(nome: string, raca: string) {
        super(nome); //imita o construtor das propriedades da classe Animal
        this.raca=raca
    }

    emitirSom(): void { // exemplo de polimorfismo
        console.log("miau");
    }
    ronronar() :void{
        console.log("rooo rooo")
    }
}

class Cachorro extends Animal {
    
    constructor(nome: string) {
        super(nome); //imita o construtor das propriedades da classe Animal
    }

    emitirSom(): void { // exemplo de polimorfismo
        console.log("au au");
    }
}

let cat = new Gato("felix", " Persian");
cat.emitirSom(); 
cat.mover(10);
cat.ronronar()

let animais: Animal []= [new Animal("Onça"),
                         new Cachorro("bolt"),
                         new Gato("Garfield", "Americano")] //array de animais
animais.forEach(bicho => {
    bicho.emitirSom()
});

/*Polimorfismo:o mesmo método pode se comportar
 de maneiras diferentes dependendo do objeto que o 
 chama. No exemplo acima da seção anterior, o método
  emitirSom foi redefinido na classe Cachorro para emitir
   um som específico. */