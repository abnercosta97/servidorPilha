import fs from "fs-extra";

export default class Arquivo {
  private static filename: string = "./src/controllers/dados.txt";

  public static async read(): Promise<string[]> | never {
    const buffer = await fs.readFile(Arquivo.filename, "utf-8");
    return buffer ?  buffer.split("\r\n") : [];
  }

  public static async write(nome: string): Promise<void> | never {
    fs.writeFile(Arquivo.filename, nome, "utf-8");
  }
}
