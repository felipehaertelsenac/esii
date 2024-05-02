class GerarRelatorio {
    constructor(dados) {
        this.dados = dados;
    }

    gerarRelatorio() {
        // Lógica para gerar o relatório
        return "Relatório gerado";
    }
}

class ServicoEmail{

    enviarEmail(email, conteudo) {
        // Lógica para enviar o e-mail
        console.log("Enviar email para", email, "com conteudo: ", conteudo);
    }
}