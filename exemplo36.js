function processarPedido(pedido) {
    validarProdutos(pedido.produtos);
    let total = calcularTotal(pedido.produtos);
    aplicarDescontos(pedido.cliente, total);
    if (total > 500) {
        atualizarStatusCliente(pedido.cliente);
    }
    salvarPedido(pedido);
    enviarEmailConfirmacao(pedido.cliente);
}