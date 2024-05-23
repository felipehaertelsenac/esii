function processarPedido(pedido) {
    validarProdutos(pedido.produtos);
    let total = calcularTotalPedido(pedido);
    atualizarClienteSeNecessario(pedido.cliente, total)
    finalizarPedido(pedido, total)
}

function calcularTotalPedido(pedido) {
    let total = calcularTotal(pedido.produtos);
    return aplicarDescontos(pedido.cliente, total)
}

function atualizarClienteSeNecessario(cliente, total) {
    if (total > 500) {
        atualizarStatusCliente(cliente);
    }
}

function finalizarPedido(pedido, total) {
    salvarPedido(pedido, total);
    enviarEmailConfirmacao(pedido.cliente);
}