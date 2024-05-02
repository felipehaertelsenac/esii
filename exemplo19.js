function processarUsuario(id, nome, email, ativo) {
    if (!id || !nome || !email) {
        console.log("Dados inválidos");
        return false;
    }
    
    console.log("Processando usuário:");
    console.log(`ID: ${id}, Nome: ${nome}, Email: ${email}, Status: ${ativo ? "Ativo" : "Inativo"}`);
    
    // Lógica para salvar no banco de dados ou processar mais informações
    // Código complexo aqui
}