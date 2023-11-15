import { Request, Response } from "express";

export default class Pilha{
    public push(req:Request, res:Response): void{
        let nome: string = req.body.nome;
        let pilha: string = req.body.pilha;
        let pilhaArray: Array<string> = pilha.split(",");
        pilhaArray.push(nome);
        res.send(pilhaArray);
    }
    public pop(req:Request, res:Response): void{
        let pilha: string = req.body.pilha;
        let pilhaArray: Array<string> = pilha.split(",");
        pilhaArray.pop();
        res.send(pilhaArray);
    }
}
