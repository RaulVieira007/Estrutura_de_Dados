import ler from 'readline-sync';
import { Queue } from './Queue';

const fila = new Queue<string>();
let continua: string;

do {
    console.log("\n####### Fila de atendimento ###############");
    console.log("### Digite 1 para cadastrar usuário ########");
    console.log("### Digite 2 para finalizar atendimento #####");
    console.log("### Digite 3 para ver lista de usuários #####");
    console.log("### Digite 0 para Para encerrar o programa. #####");

    let opcao = ler.questionInt(" -> ");

    switch (opcao) {
        case 1:
            const nome = ler.question("Nome: ");
            console.clear();
            fila.enqueue(nome);
            console.log(`Fila:\n ${nome}\n Cliente Adicionado!`);
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A fila está vazia. Não há clientes para chamar.");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`O Cliente foi Chamado!`);
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log("Lista de Clientes na Fila:");
                fila.printQueue();
            }
            break;
        
        case 0:
            fila.clear();
            console.log("Programa Finalizado!");
            process.exit(0);
            

        default:
            console.log("Opção inválida!");
            break;
    }

    continua = ler.question("Deseja continuar? (s/n): ").toLowerCase();

} while (continua === "s");
