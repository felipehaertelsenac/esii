// Calcula a densidade dissipativa 
// Este calculo é utilizado na teoria da relatividade para objetos em alta velocidade
function calcularDensidadeDissipativa(pressao, raio, velocidadeLuz) {
    return (pressao * raio ** 2) / (velocidadeLuz ** 2);
}