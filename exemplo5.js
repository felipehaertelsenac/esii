class Pedido {
    constructor() {
        this.notificador = new NotificacaoEmail();
    }

    processarPedido() {
        this.notificador.enviar("Pedido processado");
    }
}

class NotificacaoEmail {
    enviar(mensagem) {
        console.log("Enviando email com a mensagem:", mensagem);
    }
}