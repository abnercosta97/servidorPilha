import { Request, Response } from "express";
import Arquivo from "./Arquivo";
import PacienteProps from "../types";

export default class Fila {
  public async append(req: Request, res: Response): Promise<void> {
    const { paciente } = req.params;
    const pacientes = await Arquivo.read();
    const pacienteObj: PacienteProps = {
      nome: paciente,
      doador: false // Provide a value for the 'doador' property
    };
    pacientes.push(pacienteObj);
    await Arquivo.write(pacientes.join("\r\n"));
    res.send(pacientes);
}


  public async remove(_: Request, res: Response): Promise<void> {
    const nomes = await Arquivo.read();
    const nome = nomes.shift();
    if (!nome) {
      res.send("Pilha vazia");
      return;
    }
    await Arquivo.write(nomes.join("\r\n"));
    res.send(nome);
  }
}
