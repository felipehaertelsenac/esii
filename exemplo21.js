class Pedido {
    constructor(itens) {
        this.itens = itens;
    }

    finalizarPedido() {
        const total = this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
        this.itens.forEach(item => {
            estoque.diminuirQuantidade(item.produtoId, item.quantidade);
        });
        console.log(`Pedido finalizado. Total: ${total}`);
    }
}