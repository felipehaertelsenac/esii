class Relatorio {
    constructor(dados) {
        this.dados = dados;
    }

    gerarRelatorio() {
        // Lógica para gerar o relatório
        return "Relatório gerado";
    }

    enviarEmail(email) {
        // Lógica para enviar o relatório por e-mail
        console.log("Relatório enviado para", email);
    }
}