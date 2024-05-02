function criarMensagem(nome, tipo) {
    let base = `Olá, ${nome}!`;
    if (tipo === 'boasVindas') {
        return `${base} Bem-vindo ao nosso serviço.` ;
    } else if (tipo === 'despedida') {
        return `${base} Sentiremos sua falta.` ;
    }
}

function enviarEmail(nome, tipo) {
    let mensagem = criarMensagem(nome, tipo);
}

enviarEmail('Felipe', 'boasVindas');
enviarEmail('Romulo', 'despedida');