class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}

class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
}

class Emprestimo {
    constructor(livro, usuario, notificador) {
        this.livro = livro;
        this.usuario = usuario;
        this.notificador = notificador;
    }

    emprestar(){
        this.notificador.notificar(this.usuario, `Emprestimo realizado: ${this.livro.titulo}`);
    }

    devolver() {
        this.notificador.notificar(this.usuario, `Devolução realizada: ${this.livro.titulo}`);
    }
}

class Notificador{
    notificar(usuario, mensagem) {}
}

class NotificacaoEmail extends Notificador {
    notificar(usuario, mensagem) {
        console.log(`Enviando email para ${usuario.nome} a mensagem: , ${mensagem}`);
    }
}

class NotificacaoSMS extends Notificador {
    notificar(mensagem) {
        console.log(`Enviando sms para ${usuario.nome} a mensagem: , ${mensagem}`);
    }
}
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
}

let biblioteca = new Biblioteca();
let notificador = new NotificacaoEmail();
let livro = new Livro("Livro 123", "Juliana", "12321312321");
let usuario = new Usuario("Felipe", 1);

biblioteca.adicionarLivro(livro);
biblioteca.registrarUsuario(usuario);

let emprestimo = new Emprestimo(livro, usuario, notificador);

emprestimo.emprestar();
emprestimo.devolver();