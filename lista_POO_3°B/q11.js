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
var InstrumentoMusical = /** @class */ (function () {
    function InstrumentoMusical() {
    }
    InstrumentoMusical.prototype.tocar = function () {
    };
    return InstrumentoMusical;
}());
var Violao = /** @class */ (function (_super) {
    __extends(Violao, _super);
    function Violao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Violao.prototype.tocar = function () {
        console.log("Tocando Violão");
    };
    return Violao;
}(InstrumentoMusical));
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piano.prototype.tocar = function () {
        console.log("Tocando Piano");
    };
    return Piano;
}(InstrumentoMusical));
function tocar(instrumentos) {
    instrumentos.forEach(function (instrumento) { return instrumento.tocar(); });
}
var violao_1 = new Violao();
var piano_1 = new Piano();
var instrumentos = [violao_1, piano_1];
tocar(instrumentos);
