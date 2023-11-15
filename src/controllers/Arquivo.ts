import fs from 'fs';

export default class Arquivo{
    private static filename: string = "./src/controllers/dados.txt";
    public static read(): Promise<string> | never{
        return new Promise((resolve, reject) => {
            fs.readFile(this.filename, (err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data.toString());
                }
            });
        });
    }
    public static write(nome: string): Promise<void> | never{
        return new Promise((resolve, reject) => {
            fs.writeFile(this.filename, nome, (err) => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    }
}
