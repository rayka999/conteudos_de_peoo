var ServicoDeEntrega = /** @class */ (function () {
    function ServicoDeEntrega(trabalhador) {
        this.trabalhador = trabalhador;
    }
    ServicoDeEntrega.prototype.executar = function () {
        console.log("O motoboy ".concat(this.trabalhador, " fez a entrega"));
    };
    return ServicoDeEntrega;
}());
var ServicoDeMontagem = /** @class */ (function () {
    function ServicoDeMontagem(trabalhador) {
        this.trabalhador = trabalhador;
    }
    ServicoDeMontagem.prototype.executar = function () {
        console.log("".concat(this.trabalhador, " fez a montagem do aparelho"));
    };
    return ServicoDeMontagem;
}());
var ENt = new ServicoDeEntrega("Diogo");
var Mon = new ServicoDeMontagem("Diana");
ENt.executar();
Mon.executar();
