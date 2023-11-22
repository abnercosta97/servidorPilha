import { Request, Response } from "express";
import Arquivo from "./Arquivo";
import PacienteProps from "../types";

export default class Fila {
  public async append(req: Request, res: Response): Promise<void> {
    const { nome, doador } = req.params;
    const pacientes = await Arquivo.read();
    pacientes.push({ nome, doador: doador === 'true' });
    await Arquivo.write(pacientes);
    res.json(pacientes);
}


  public async remove(_: Request, res: Response): Promise<void> {
    const pacientes = await Arquivo.read();
    if (pacientes.length === 0) {
        res.send("Fila vazia");
    } else {
      const paciente = pacientes.shift();
        await Arquivo.write(pacientes);
        res.json(paciente);
    }
}
}