function calcularDesconto(pedido) {
    let descontoBase = 0.05;
    let descontoExtra = 0.02;  // Não usado
    return pedido.total * descontoBase;
}

function calcularFrete() {
    // Função obsoleta
}