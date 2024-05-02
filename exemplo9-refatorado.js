function calcularDesconto(preco, tipoCliente, anosCliente) {
    const descontos = {
        VIP: anosCliente > 5 ? 0.1 : 0.05,
        Frequente: anosCliente > 3 ? 0.07 : 0.04
    };

    const desconto = tipoCliente in descontos ? preco * descontos[tipoCliente] : 0;

    return preco - desconto;
}