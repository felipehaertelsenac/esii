try {
    // Código que pode lançar várias exceções diferentes
    let data = JSON.parse(response);
    let value = data.results[0].value;
    processData(value);
} catch (error) {
    console.log("Erro ao processar a resposta");
}