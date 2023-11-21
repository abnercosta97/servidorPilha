import { Router } from "express";
import Pilha from "../controllers/Pilha";

const routes = Router();
const pilhaController = new Pilha();

routes.get("/push/:nome", pilhaController.push);
routes.get("/pop", pilhaController.pop); 

// Aceita qualquer método HTTP ou URL
routes.use((_, res) => res.json({ error: "Requisição desconhecida" }));

export default routes;
