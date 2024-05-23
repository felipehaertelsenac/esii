function notificarUsuario(usuario, mensagem) {
    if (usuario.preferenciaNotificacao === "email") {
        let notificador = new EmailNotificador();
        notificador.enviar(usuario.email, mensagem);
    } else if (usuario.preferenciaNotificacao === "sms") {
        let notificador = new SMSNotificador();
        notificador.enviar(usuario.telefone, mensagem);
    }
}