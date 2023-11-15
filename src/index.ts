import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from './routes';
// carrega as variáveis de ambiente
dotenv.config();
// será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3079;
console.log(PORT);
// cria o servidor e coloca na variável app
const app = express(); // cria o servidor e coloca na variável app
// suportar parâmetros JSON no body da requisição
app.use(express.json());
//aceitar requisições de outros domínios
app.use(cors()); 
// inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

// define a rota para o pacote /routes
app.use(routes);