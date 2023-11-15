import { Router, Request, Response } from "express";
//import { push, pop } from ".";

const routes = Router();


routes.get("/push/:nome", );//push);
routes.get("/pop", )///pop);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );


export default routes;
