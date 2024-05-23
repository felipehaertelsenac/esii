function conectarBancoDados() {
    try {
        // código de conexão 
    } catch (error) {
        throw new Error("Falha ao conectar ao banco de dados: " + error.message);
    }
}

function executarConsulta(query) {
    try {
        // efetuando consulta ao banco de dados
    } catch (error) {
        throw new Error("Falha na consulta ao banco de dados: " + error.message);
    }
}

function mostrarResultados(resultado) {
    // listagem do resultado
}

try {
    // Código que realiza múltiplas operações com possíveis exceções
    conectarBancoDados();
    let resultado = executarConsulta("SELECT * FROM usuarios");
    mostrarResultados(resultado);
} catch (error) {
    console.error("Erro ao mostrar resultados:", error);
}