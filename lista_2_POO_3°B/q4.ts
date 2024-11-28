abstract class Documento{
    abstract abrir():void;
    abstract fechar():void;
}

class PDF extends Documento{
    abrir(): void {
        console.log(`O arquivo PDF abriu`)
    }
    fechar(): void {
        console.log(`O arquivo PDF fechou`)
    }
}

class Word extends Documento{
    abrir(): void {
        console.log(`O Word abriu o documento`)
    }
    fechar(): void {
        console.log(`O Word fechou o documento`)
    }
}

