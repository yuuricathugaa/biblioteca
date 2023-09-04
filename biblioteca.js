let biblioteca = [];

function exibirMenu() {
    console.log("Menu Principal da Biblioteca :");
    console.log("1. Cadastrar Livro");
    console.log("2. Alterar Livro");
    console.log("3. Deletar Livro");
    console.log("4. Realizar Empréstimo de Livro");
    console.log("5. Devolver Livro");
    console.log("6. Sair");
}

function cadastrarLivro() {
    const id = prompt("Digite o ID do livro :")
    const titulo = prompt("Digite o título do livro :");
    const autor = prompt("Digite o autor do livro :");
    const emprestado = false;
    const livro = { id, titulo, autor, emprestado };
    biblioteca.push({titulo, id, autor, emprestado});
    console.log("Livro cadastrado com sucesso !");
}

function encontrarLivroPorId(id) {
    return biblioteca.find((livro) => livro.id === id);
}

function alterarLivro() {
    const id = prompt("Digite o ID do livro que deseja alterar :");
    const livroExistente = biblioteca.find((livro) => livro.id === id);

    if (livroExistente) {
        const novoTitulo = prompt("Digite o novo título ou deixe em branco para manter o livro atual :");
        const novoAutor = prompt("Digite o novo autor ou deixe em branco para manter o autor atual :");

        if (novoTitulo !== "") {
            livroExistente.titulo = novoTitulo;
        }
        if (novoAutor !== "") {
            livroExistente.autor = novoAutor;
        }

        console.log("Livro alterado com sucesso !");
    } else {
        console.log("Livro não encontrado !!");
    }
}

function deletarLivro() {
    const id = prompt("Digite o ID do livro que deseja deletar :");
    const livroExistente = biblioteca.find((livro) => livro.id === id);

    if (livroExistente) { 
    const index = biblioteca.indexOf(livroExistente); 
    biblioteca.splice(index, 1);
        console.log("Livro deletado com sucesso !");
    } else {
        console.log("Livro não encontrado !!");
    }
}

function realizarEmprestimo() {
    const id = prompt("Digite o ID do livro que deseja emprestar :");
    const livroExistente =  biblioteca.find((livro) => livro.id === id);

    if (livroExistente) {
        if (livroExistente.emprestado) {
      console.log("O livro já foi emprestado. Digite um ID de um livro que não foi emprestado ainda.");
    } else {
      livroExistente.emprestado = true; 
      console.log("Livro emprestado com sucesso!"); 
    }
  } else {
    console.log("O Livro não foi encontrado. Por favor, digite um ID de livro válido.");
  }
}

function devolverLivro() {
    const id = prompt("Digite o ID do livro que deseja devolver :");
    const livroExistente = biblioteca.find((livro) => livro.id === id);

    if (livroExistente) {
        if (livroExistente.emprestado) {
            livroExistente.emprestado = false;
            console.log("Livro devolvido com sucesso !");
        } else {
            console.log("Este livro não está emprestado.");
        }
    } else {
        console.log("Livro não encontrado !!");
    }
}

let escolha;
do {
    exibirMenu();
    escolha = parseInt(prompt("Escolha uma opção :"));

    switch (escolha) {
        case 1:
            cadastrarLivro();
            break;
        case 2:
            alterarLivro();
            break;
        case 3:
            deletarLivro();
            break;
        case 4:
            realizarEmprestimo();
            break;
        case 5:
            devolverLivro();
            break;
        case 6:
            console.log("Sistema encerrado !!");
            break;
        default:
            console.log("Opção inválida !!");
    }
} while (escolha !== 6);
