"use strict";
class Documento {
}
class PDF extends Documento {
    abrir() {
        console.log(`O arquivo PDF abriu`);
    }
    fechar() {
        console.log(`O arquivo PDF fechou`);
    }
}
class Word extends Documento {
    abrir() {
        console.log(`O Word abriu o documento`);
    }
    fechar() {
        console.log(`O Word fechou o documento`);
    }
}
