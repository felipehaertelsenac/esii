try {
    // Código que realiza múltiplas operações com possíveis exceções
    conectarBancoDados();
    let resultado = executarConsulta("SELECT * FROM usuarios");
    mostrarResultados(resultado);
} catch (error) {
    console.error("Erro ao interagir com o banco de dados:", error);
}