function calcularSalarioBruto(horasTrabalhadas, taxaHora) {
    return horasTrabalhadas * taxaHora;
}

function calcularSalarioLiquido(salarioBruto, imposto, bonus, descontos) {
    return salarioBruto - (salarioBruto * imposto) + bonus - descontos;
}

function imprimirSalarioLiquido(salarioLiquido) {
    console.log(`Salário líquido: ${salarioLiquido}`);
}

function calcularPagamento(horasTrabalhadas, taxaHora, imposto, bonus, descontos) {
    const salarioBruto = calcularSalarioBruto(horasTrabalhadas, taxaHora);
    const salarioLiquido = calcularSalarioLiquido(salarioBruto, imposto, bonus, descontos);
    imprimirSalarioLiquido(salarioLiquido);
    return salarioLiquido;
}