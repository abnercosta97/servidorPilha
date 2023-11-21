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
