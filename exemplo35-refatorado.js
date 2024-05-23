function determinarDesconto(cliente) {
    if (cliente.tipo === "commum" && cliente.anos > 5) return 0.05;
    if (cliente.tipo === "premium") return cliente.anos > 5 ? 0.1 : 0.05;
    return 0;

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