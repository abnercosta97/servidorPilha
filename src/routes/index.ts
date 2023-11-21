import { Router, Request, Response } from "express";
import pilha from "./pilha";

const routes = Router();

routes.use("/pilha", pilha);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
