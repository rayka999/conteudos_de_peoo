class InstrumentoMusical {
    tocar() : void{

    }
}

class Violao extends InstrumentoMusical {
    tocar () :void{
        console.log("Tocando Violão")
    }
}

class Piano extends InstrumentoMusical{
    tocar () :void{
        console.log("Tocando Piano")
    }
}

function tocar(instrumentos: InstrumentoMusical[]){
    instrumentos.forEach(instrumento => instrumento.tocar())
}

const violao_1=new Violao()
const piano_1=new Piano()
const instrumentos: InstrumentoMusical[] =[violao_1,piano_1]

tocar(instrumentos)