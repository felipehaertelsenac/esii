try {
    // Código que pode lançar várias exceções diferentes
    let data = JSON.parse(response);
    let value = data.results[0].value;
    processData(value);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Erro de sintaxe nos dados JSON:", error.message);
    } else if (error instanceof TypeError) {
        console.log("Erro de tipo ao acessar os dados:", error.message);
    } else {
        console.log("Erro inesperado: ", error.message);
    }
}