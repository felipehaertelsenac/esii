function determinarDesconto(cliente) {
    if (cliente.anos > 5) {
        if (cliente.tipo === "premium") {
            return 0.1;
        } else if (cliente.tipo === "comum") {
            return 0.05;
        }
    } else {
        if (cliente.tipo === "premium") {
            return 0.05;
        } else {
            return 0;
        }
    }
}