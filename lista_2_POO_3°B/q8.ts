abstract class veiculo{
    acelerar():void{}
    frear():void{}
}

class CarroEletrico extends veiculo{
    frear(): void {
        console.log("O sistema do carro freiou")
    }
    acelerar(): void {
        console.log("o botão para acelerar foi acionado")
    }
}

class CarroCombustão extends veiculo{
    acelerar(): void {
        console.log("a marcha foi passada")
    }
    frear(): void {
        console.log("o motorista enfiou o pé no freio")
    }
}

let elet=new CarroEletrico()
let meca= new CarroCombustão()

elet.acelerar()
meca.acelerar()
elet.frear()
meca.frear()