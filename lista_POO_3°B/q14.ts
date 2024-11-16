class Veiculo{
    mover():void {
      console.log("O veículo está em movimento");

    }
}

class Carro extends Veiculo{
    mover():void {
        console.log("O carro está em movimento")
    }
}

class Bicicleta extends Veiculo{
    mover():void {
        console.log("A bicicleta está em movimento")
    }
}

function mover(veiculos:Veiculo[]): void{
    veiculos.forEach(veiculo => veiculo.mover())
}

const carro_1=new Carro();
const bicicleta_1=new Bicicleta();

const veiculos:Veiculo[] =[carro_1,bicicleta_1]
mover(veiculos)