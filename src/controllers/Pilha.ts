import { Request, Response } from "express";
import Arquivo from "./Arquivo";
import PacienteProps from "../types";

export default class Pilha {
  public async push(req: Request, res: Response): Promise<void> 
  {
    const { nome, doador } = req.params;
    const pacientes = await Arquivo.read();
    console.log("pacientes",pacientes);
    pacientes.push({ nome, doador:doador === "true" });
    await Arquivo.write(pacientes);
    res.json(pacientes);
  }

  public async pop(_: Request, res: Response): Promise<void> {
    const pacientes = await Arquivo.read();
    console.log("pacientes", pacientes);
    if (pacientes.length === 0) {
        res.json("Pilha vazia");
    } else {
        const paciente = pacientes.pop();
        await Arquivo.write(pacientes);
        res.json(paciente);
    }
}
}
