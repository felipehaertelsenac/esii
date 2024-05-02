function login(usuario, senha) {
    if (usuario == null || usuario.length === 0) {
        return { success: false, message: "Usuário não pode ser vazio." };
    }
    if (senha == null || senha.length === 0) {
        return { success: false, message: "Senha não pode ser vazia." };
    }
    if (usuario !== "admin" || senha !== "123456") {
        return { success: false, message: "Usuário ou senha inválidos." };
    }
    return { success: true, message: "Login bem-sucedido." };
}