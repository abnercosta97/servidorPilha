import fs from "fs-extra";
import PacienteProps from "../types";
export default class Arquivo {
  private static filename: string = "./src/controllers/dados.txt";

  public static async read(): Promise<PacienteProps[]> | never {
    const buffer = await fs.readFile(Arquivo.filename, "utf-8");
    const pacientes: PacienteProps[] = buffer
      ? buffer.split("\r\n").map((item: string) => JSON.parse(item))
      : [];
    return pacientes;
  }

  public static async write(itens: PacienteProps[]): Promise<void> | never {
    const [nome, doador] = itens;
    fs.writeFile(Arquivo.filename, nome, doador, "utf-8");
  }
}
/*
public static async write(nome: string): Promise<void> | never {
  fs.writeFile(Arquivo.filename, nome, "utf-8");
}
}*/