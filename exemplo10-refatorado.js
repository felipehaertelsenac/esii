function login(usuario, senha) {
    const isValidUser = usuario === "admin" && senha === "123456";

    return {
        success: isValidUser,
        message: isValidUser ? "Login bem-sucedido." : "Usuário ou senha inválidos."
    }
}