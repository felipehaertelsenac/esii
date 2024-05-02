class Notificador{
    enviar(mensagem) {}
}

class NotificacaoEmail extends Notificador {
    enviar(mensagem) {
        console.log("Enviando email com a mensagem:", mensagem);
    }
}

class NotificacaoSMS extends Notificador {
    enviar(mensagem) {
        console.log("Enviando sms com a mensagem:", mensagem);
    }
}

class Pedido {
    constructor(notificador) {
        this.notificador = notificador;
    }

    processarPedido() {
        this.notificador.enviar("Pedido processado");
    }
}