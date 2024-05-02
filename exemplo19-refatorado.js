function validarDadosUsuario(id, nome, email){
    // verificação dos dados
    return id && nome && email;
}
 
function imprimirDetalhesUsuario(id, nome, email, ativo) {
    console.log(`ID: ${id}, Nome: ${nome}, Email: ${email}, Status: ${ativo ? "Ativo" : "Inativo"}`)
}


function processarUsuario(id, nome, email, ativo) {
    if (!validarDadosUsuario(id, nome, email)) {
        console.log("Dados inválidos");
        return false;
    }
    
    console.log("Processando usuário:");
    imprimirDetalhesUsuario(id, nome, email, ativo);

    // Lógica para salvar no banco de dados ou processar mais informações
    // Código complexo aqui
}