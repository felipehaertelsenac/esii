class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    adicionarLivro(titulo, autor, isbn) {
        this.livros.push({ titulo, autor, isbn });
    }

    registrarUsuario(nome, id) {
        this.usuarios.push({ nome, id });
    }

    emprestarLivro(usuarioId, isbn) {
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        const livro = this.livros.find(l => l.isbn === isbn);
        if (livro && usuario) {
            this.emprestimos.push({ usuario, livro });
            console.log(`Livro ${livro.titulo} emprestado para ${usuario.nome}`);
        }
    }

    devolverLivro(usuarioId, isbn) {
        const emprestimoIndex = this.emprestimos.findIndex(e => e.usuario.id === usuarioId && e.livro.isbn === isbn);
        if (emprestimoIndex !== -1) {
            this.emprestimos.splice(emprestimoIndex, 1);
            console.log(`Livro devolvido: ${isbn}`);
        }
    }
}