import { Router } from "express";
import Fila from "../controllers/Fila";

const routes = Router();
const fila = new Fila();

routes.get("/fila/append/:nome/:doado", fila.append);
routes.get("/remove/pop", fila.remove);


// Aceita qualquer método HTTP ou URL
routes.use((_, res) => res.json({ error: "Requisição desconhecida" }));

export default routes;
