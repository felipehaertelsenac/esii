function enviarEmailBoasVindas(nome) {
    let mensagem = `Olá, ${nome}! Bem-vindo ao nosso serviço.`;
    enviarEmail(nome, mensagem);
}

function enviarEmailDespedida(nome) {
    let mensagem = `Olá, ${nome}! Sentiremos sua falta.`;
    enviarEmail(nome, mensagem);
}