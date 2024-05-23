class NotificadorFactory {
    criarNotificador(usuario){
        if (usuario.preferenciaNotificacao === "email") {
            return new EmailNotificador();
        } else if (usuario.preferenciaNotificacao === "sms") {
            return new SMSNotificador();
        }
        throw new Error("Tipo de notificação desconhecido");
    }
}

function notificarUsuario(usuario, mensagem) {
    let notificador = NotificadorFactory.criarNotificador(usuario);
    notificador.enviar(usuario, mensagem);
}