var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sujeito = /** @class */ (function () {
    function Sujeito() {
        this.Observadores = [];
    }
    Sujeito.prototype.adicionar = function (observador) {
        this.Observadores.push(observador);
    };
    ;
    Sujeito.prototype.remover = function (observador) {
        var indice = this.Observadores.indexOf(observador);
        if (indice !== -1) {
            this.Observadores.splice(indice, 1);
        }
    };
    ;
    Sujeito.prototype.notificação = function () {
        this.Observadores.forEach(function (observer) {
            observer.atualizar();
        });
    };
    return Sujeito;
}());
var Notificador = /** @class */ (function (_super) {
    __extends(Notificador, _super);
    function Notificador() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mensagem = '';
        return _this;
    }
    // Método para definir uma nova mensagem e notificar os observadores
    Notificador.prototype.setMensagem = function (mensagem) {
        this.mensagem = mensagem;
        this.notificação(); // Notificar observadores após atualizar o estado
    };
    // Método para obter a mensagem
    Notificador.prototype.getMensagem = function () {
        return this.mensagem;
    };
    return Notificador;
}(Sujeito));
