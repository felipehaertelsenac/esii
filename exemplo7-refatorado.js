function calcularVendas(vendas, mes) {
    let total = 0;
    for (let venda of vendas) {
        total += venda.valor;
    }
    console.log(`Total de vendas em ${mes}: `, total);
}

calcularVendas(vendasJaneiro, "Janeiro");
calcularVendas(vendasFevereiro, "Fevereiro");
calcularVendas(vendasMarco, "Março");