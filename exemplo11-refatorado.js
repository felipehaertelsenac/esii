function renderizarConteudo(tipoUsuario) {
    const mensagens = {
        admin: "Bem-vindo, administrador!",
        user: "Bem-vindo, usuário!",
        default: "Bem-vindo, visitante!"
    }

    return `<div>${mensagens[tipoUsuario] || mensagens.default}</div>`;
}