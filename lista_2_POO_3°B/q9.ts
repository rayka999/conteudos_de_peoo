interface Observer{
    atualizar():void;
}

abstract class Sujeito{
    protected Observadores: Observer[]=[]
    adicionar(observador:Observer):void{
        this.Observadores.push(observador);
    };
    remover(observador:Observer):void {
        let indice = this.Observadores.indexOf(observador);
        if (indice !== -1) {
            this.Observadores.splice(indice, 1);
        }
    };
    notificação():void{
        this.Observadores.forEach(observer => {
            observer.atualizar()
        });
    }
}

class Notificador extends Sujeito{
    private mensagem: string = '';

  // Método para definir uma nova mensagem e notificar os observadores
    public setMensagem(mensagem: string): void {
        this.mensagem = mensagem;
        this.notificação(); // Notificar observadores após atualizar o estado
    }

  // Método para obter a mensagem
    public getMensagem(): string {
        return this.mensagem;
    }
}