import { Router, Request, Response } from "express";
import pilha from "./pilha";
import fila from "./fila";

const routes = Router();

routes.use("/pilha", pilha);
routes.use("/fila", fila);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
