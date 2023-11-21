import { Request, Response } from "express";
import Arquivo from "./Arquivo";


export default class Pilha {
    public push(req: Request, res: Response): void {
        let nome: string = req.params.nome;
        let pilha: string | undefined = req.query.pilha as string | undefined;

        if (!pilha) {
            // Se pilha não estiver definida, usamos apenas o valor de nome
            pilha = nome;
        } else {
            // Se pilha estiver definida, adicionamos o nome ao final
            pilha += "," + nome;
        }

        let pilhaArray: Array<string> = pilha.split(",");

        // Chamar o método write do Arquivo para cadastrar no arquivo "dados.txt"
        Arquivo.write(nome)
            .then(() => res.send(pilhaArray))
            .catch((err) => res.status(500).send({ error: "Erro ao cadastrar no arquivo", details: err }));
    }
    public pop(req: Request, res: Response): void {
        let pilha: string = req.query.pilha as string; // Obter o valor de pilha a partir dos parâmetros da consulta
        let pilhaArray: Array<string> = pilha.split(",");
        pilhaArray.pop();
        res.send(pilhaArray);
    }
}

/*
import { Request, Response } from "express";
import { MyNode, Stack } from "../models/stack";

export default class Pilha {
    private pilha: Stack<MyNode<string>>;

    constructor() {
        this.pilha = new Stack<MyNode<string>>();
    }

    public push(req: Request, res: Response): void {
        let nome: string = req.params.nome;
        let novoNode = new MyNode<MyNode<string>>(new MyNode<string>(nome));

        this.pilha.push(novoNode);

        // Chamar o método write do Arquivo para cadastrar no arquivo "dados.txt"
        // Não está claro como você deseja usar Arquivo.write neste contexto.
        // Se necessário, ajuste conforme sua lógica.

        res.send(this.getPilhaArray());
    }

    public pop(req: Request, res: Response): void {
        let poppedNode = this.pilha.pop();

        // Chamar o método write do Arquivo para cadastrar no arquivo "dados.txt"
        // Não está claro como você deseja usar Arquivo.write neste contexto.
        // Se necessário, ajuste conforme sua lógica.

        res.send(this.getPilhaArray());
    }

    private getPilhaArray(): Array<string> {
        let pilhaArray: Array<string> = [];
        let current_node = this.pilha.top;

        while (current_node !== null) {
            pilhaArray.push(current_node.value.value);
            current_node = current_node.next;
        }

        return pilhaArray.reverse(); // Revertendo a ordem para corresponder à lógica da pilha
    }
}
*/

