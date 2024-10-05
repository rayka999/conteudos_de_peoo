let carro={
    marca: "Toyota",
    modelo:'Corolla',
    ano:2020,
    descrever: function(){ //método
        return `Este carro é um ${this.marca} da ${this.modelo} do ano ${this.ano}`;
    }
}

console.log(carro.descrever())