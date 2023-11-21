import { Request, Response } from "express";
import Arquivo from "./Arquivo";

export default class Pilha {
  public async push(req: Request, res: Response): Promise<void> {
    const {nome} = req.params;
    const nomes = await Arquivo.read();
    nomes.push(nome);
    await Arquivo.write(nomes.join("\r\n"));
    res.send(nomes);
  }

  public async pop(_: Request, res: Response): Promise<void> {
    const nomes = await Arquivo.read();
    const nome = nomes.pop();
    if (!nome) {
      res.send("Pilha vazia");
      return;
    }
    await Arquivo.write(nomes.join("\r\n"));
    res.send(nome);
  }
}
