function calcularVendasJaneiro() {
    let total = 0;
    for (let venda of vendasJaneiro) {
        total += venda.valor;
    }
    console.log("Total de vendas em Janeiro: ", total);
}

function calcularVendasFevereiro() {
    let total = 0;
    for (let venda of vendasFevereiro) {
        total += venda.valor;
    }
    console.log("Total de vendas em Fevereiro: ", total);
}

function calcularVendasMarco() {
    let total = 0;
    for (let venda of vendasMarco) {
        total += venda.valor;
    }
    console.log("Total de vendas em Março: ", total);
}