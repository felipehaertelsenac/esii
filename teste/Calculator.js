module.exports = {
    dividir: function dividir(numero1, numero2){
        if (numero2 === 0)
            throw new Error ("Não é possível dividir por zero");
        return numero1 / numero2;
    },
    somar: function somar(numero1, numero2){
    }
}