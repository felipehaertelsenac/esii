class Passaro {
    voar() {
        console.log("Voando");
    }
}

class Pinguim extends Passaro {
    voar() {
        throw new Error("Não posso voar");
    }
}