function calcularPagamento(horasTrabalhadas, taxaHora, imposto, bonus, descontos) {
    const salarioBruto = horasTrabalhadas * taxaHora;
    const salarioLiquido = salarioBruto - (salarioBruto * imposto) + bonus - descontos;
    console.log(`Salário líquido: ${salarioLiquido}`);
    return salarioLiquido;
}