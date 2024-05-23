try {
    processarDados();
} catch (erro) {
    // Loga o erro e continua a execução porque os dados podem ser parcialmente processados
    console.log(erro);
}