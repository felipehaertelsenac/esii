function renderizarConteudo(tipoUsuario) {
    if (tipoUsuario === "admin") {
        return "<div>Bem-vindo, administrador!</div>";
    } else if (tipoUsuario === "user") {
        return "<div>Bem-vindo, usuário!</div>";
    } else {
        return "<div>Bem-vindo, visitante!</div>";
    }
}