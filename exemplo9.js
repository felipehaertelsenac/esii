function calcularDesconto(preco, tipoCliente, anosCliente) {
    let desconto = 0;
    if (tipoCliente === "VIP") {
        if (anosCliente > 5) {
            desconto = preco * 0.1;
        } else {
            desconto = preco * 0.05;
        }
    } else if (tipoCliente === "Frequente") {
        if (anosCliente > 3) {
            desconto = preco * 0.07;
        } else {
            desconto = preco * 0.04;
        }
    } else {
        desconto = 0;
    }
    return preco - desconto;
}