import ler from 'readline-sync';
import { Stack } from './Stack';

const pilha = new Stack<string>();
let continua: string;

do {
    console.log("\n####### Pilha de Livros ###############");
    console.log("### Digite 1 para adicionar um livro ########");
    console.log("### Digite 2 para retirar um livro ##########");
    console.log("### Digite 3 para listar todos os livros #####");
    console.log("### Digite 0 para encerrar o programa. #####");

    let opcao = ler.questionInt(" -> ");

    switch (opcao) {
        case 1:
            const nome = ler.question("Nome do livro: ");
            console.clear();
            pilha.push(nome);
            console.log(`Pilha:\n${nome}\nLivro adicionado!`);
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia. Não há livros para retirar.");
            } else {
                const livroRetirado = pilha.pop();
                console.log(`Livro "${livroRetirado}" foi retirado da pilha!`);
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia.");
            } else {
                console.log("Lista de livros na pilha:");
                pilha.printStack();
            }
            break;

        case 0:
            pilha.clear();
            console.log("Programa Finalizado!");
            process.exit(0);

        default:
            console.log("Opção inválida!");
            break;
    }

    continua = ler.question("Deseja continuar? (s/n): ").toLowerCase();

} while (continua === "s");
