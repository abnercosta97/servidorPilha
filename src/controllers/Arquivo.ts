// controllers/Arquivo.ts
import * as fs from "fs-extra";
import PacienteProps from "../types";

class Arquivo {
  private static filename: string = "./src/controllers/dados.txt";

  public static async read(): Promise<PacienteProps[]> | never {
    try {
      const content = await fs.readFile(Arquivo.filename, "utf-8");
      if (content.length === 0) {
        return [];
      }
      const lines = content.split("\r\n");
      const pacientes: PacienteProps[] = lines.map((line) => {
        const [nome, doador] = line.split(";");
        return { nome, doador: doador === "true" };
      });
      return pacientes;
    } catch (error) {
      throw new Error("Erro na leitura do arquivo.");
    }
  }

  public static async write(itens: PacienteProps[]): Promise<void> | never {
    const lines = itens.map(
      (paciente) => `${paciente.nome};${paciente.doador}`
    );
    const content = lines.join("\r\n");
    try {
      console.log(content);
      await fs.writeFile(this.filename, content, "utf-8");
    } catch (error) {
      throw new Error("Erro na escrita do arquivo.");
    }
  }
}

export default Arquivo;
